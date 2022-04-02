import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserContext from './contexts/UserContext'
import './App.css'
import Login from "./routes/Login/Login"
import Register from "./routes/register/Register"
import { useState } from "react"
import Habits from "./routes/habits/Habits"
import Today from "./routes/Today/Today"

export default function App(){
    const [user, setUser] = useState(null)
    const [token, setToken] =useState('')
    const [formRegisterHabit, setFormRegisterHabit] = useState(false)

    const contextValues = {
        user,
        setUser,
        token,
        setToken,
        formRegisterHabit,
        setFormRegisterHabit
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
