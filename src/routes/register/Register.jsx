import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/logo.png'
import { Button, Form, Img, Input, Label, Main } from "../StyleLoginAndRegister";
import { ThreeDots } from 'react-loader-spinner';

export default function Register(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [load, setLoad] = useState(false)
    const [disable, setDisable] = useState(false)

    function onLoad(){
        setLoad(true)
        setDisable(true)
    }

    function offLoad(){
        setLoad(false)
        setDisable(false)
    }

    function toRegister(e){
        e.preventDefault()
        onLoad()

        const promesse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        {
            email: email,
            name: name,
            image: image,
            password: password
        })
        promesse.then(response => {
            alert(response.data)
            navigate('/')
        })
        promesse.catch(error => {
            alert(error.response)
            offLoad()
        })
    }

    return(
        <Main>
            <Img src={Image}/>

            <Form onSubmit={toRegister}>
                <Input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        disabled={disable}/>

                <Input  type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        disabled={disable}/>

                <Input type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={disable}/>

                <Input  type="text"
                        placeholder="Foto"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        required
                        disabled={disable}/>
                        
                <Button type="submit" disabled={disable}>
                    {!load ? 'Cadastrar' : <ThreeDots color='#FFFFFF' height={40} width={40}/>}
                </Button>
            </Form>

            <Label onClick={()=> navigate('/')}>
                Já tem uma conta? Faça login!
            </Label>
        </Main>
    )
}