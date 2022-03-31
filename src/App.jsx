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

    return(
       <UserContext.Provider value={{user, setUser, token, setToken}}>
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
