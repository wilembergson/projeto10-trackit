import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./routes/Login/Login"
import Register from "./routes/Rgister/Register"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}
