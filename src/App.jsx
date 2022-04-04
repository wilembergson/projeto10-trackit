import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserContext from './contexts/UserContext'
import './App.css'
import Login from "./routes/Login/Login"
import Register from "./routes/register/Register"
import { useState } from "react"
import Habits from "./routes/habits/Habits"
import Today from "./routes/Today/Today"
import dayjs from "dayjs"

export default function App(){
    const [user, setUser] = useState(null)
    const [token, setToken] =useState('')
    const [formRegisterHabit, setFormRegisterHabit] = useState(false)
    const [todayHabits, setTodayHabits] = useState([])
    const [donePercentage, setDonePercentage] = useState(0)
    const todayDate = {
        weekDay: dayjs().day(),
        monthDay: dayjs().date(),
        month: dayjs().month()
    }

    const contextValues = {
        user,
        setUser,
        token,
        setToken,
        formRegisterHabit,
        setFormRegisterHabit,
        todayDate,
        todayHabits,
        setTodayHabits,
        donePercentage,
        setDonePercentage
    }
    
    return(
       <UserContext.Provider value={contextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Register/>}/>
                    <Route path="/habitos" element={<Habits/>}/>
                    <Route path="/hoje" element={<Today/>}/>
                </Routes>
            </BrowserRouter>
       </UserContext.Provider>
    )
}
