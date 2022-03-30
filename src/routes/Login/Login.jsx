import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/logo.png'
import { Input, Main, Img, Button, Label, Form} from '../StyleLoginAndRegister'

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

                <Button>Entrar</Button>
            </Form>
            
            <Label onClick={()=> navigate("/cadastro")}>
                Não tem uma conta? Cadastre-se!
            </Label>
        </Main>
    )
}

