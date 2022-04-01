import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserContext from './contexts/UserContext'
import './App.css'
import Login from "./routes/Login/Login"
import Register from "./routes/register/Register"
import { useState } from "react"
import Habits from "./routes/habits/Habits"

export default function App(){
    const [user, setUser] = useState(null)
    const [token, setToken] =useState('')
    const [formRegisterTask, setFormRegisterTask] = useState(false)

    const contextValues = {
        user,
        setUser,
        token,
        setToken,
        formRegisterTask,
        setFormRegisterTask
    }
    
    return(
       <UserContext.Provider value={contextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Register/>}/>
                    <Route path="/habitos" element={<Habits/>}/>
                </Routes>
            </BrowserRouter>
       </UserContext.Provider>
    )
}
