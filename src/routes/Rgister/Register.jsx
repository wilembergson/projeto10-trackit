import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/logo.png'
import { Button, Form, Img, Input, Label, Main } from "../StyleLoginAndRegister";

export default function Register(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')

    return(
        <Main>
            <Img src={Image}/>

            <Form>
                <Input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>

                <Input  type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required/>

                <Input type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required/>

                <Input  type="text"
                        placeholder="Foto"
                        value={picture}
                        onChange={e => setPicture(e.target.value)}
                        required/>
                <Button>Cadastrar</Button>
            </Form>

            <Label onClick={()=> navigate('/')}>
                Já tem uma conta? Faça login!
            </Label>
        </Main>
    )
}