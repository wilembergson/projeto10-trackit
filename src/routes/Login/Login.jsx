import axios from 'axios'
import { useContext, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/logo.png'
import UserContext from '../../contexts/UserContext'
import { Main, Img, Label, Form, Input, Button} from '../StyleLoginAndRegister'

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser, setToken} = useContext(UserContext)
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

    function toLogin(e){
        e.preventDefault()
        onLoad(true)
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
        promise.catch(error => {
            alert('Usuário ou senha incorretos.')
            offLoad()
        })
    }

    return(
        <Main>
            <Img src={Image}/>

            <Form onSubmit={toLogin}>
                <Input  type="email"
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

                <Button type='submit' disabled={disable}>
                    {!load ? 'Entrar' : <ThreeDots color='#FFFFFF' height={40} width={40}/>}
                </Button>
            </Form>
            
            <Label onClick={()=> navigate("/cadastro")}>
                Não tem uma conta? Cadastre-se!
            </Label>
        </Main>
    )
}

