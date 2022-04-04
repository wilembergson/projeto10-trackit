import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/logo.png'
import UserContext from '../../contexts/UserContext'
import { Input, Main, Img, Button, Label, Form} from '../StyleLoginAndRegister'

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser, setToken} = useContext(UserContext)

    function toLogin(e){
        e.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
        {
            email: email,
            password: password
        })
        promise.then(response => {
            setUser(response.data)
            setToken(response.data.token)
            navigate('/hoje')
        })
        promise.catch(error => alert('Usuário ou senha incorretos.'))
    }

    return(
        <Main>
            <Img src={Image}/>

            <Form onSubmit={toLogin}>
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

                <Button type='submit'>Entrar</Button>
            </Form>
            
            <Label onClick={()=> navigate("/cadastro")}>
                Não tem uma conta? Cadastre-se!
            </Label>
        </Main>
    )
}

