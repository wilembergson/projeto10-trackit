import styled from "styled-components"
import Top from "../../components/Top/Top"
import Menu from "../../components/menu/Menu"
import { Main, Title } from "../habits/Habits"

export default function Historic(){
    return(
        <>
            <Top/>
            <Main>
                <Title>Histórico</Title>
                <Subtitle>Em breve você poderá ver o seu histórico dos seus hábitos aqui.</Subtitle>
            </Main>
            <Menu/>
        </>
    )
}

const Subtitle = styled.h3`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`