import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/UserContext"

export default function Top(){
    const {user} = useContext(UserContext)
    return(
        <Header>
            <H2>TrackIt</H2>
            <Img src={user.image}/>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    padding: 0 18px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const H2 = styled.h2`
    height: 49px;

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`
const Img = styled.img`
    width: 51px;
    height: 51px;
    margin-right: 40px;
    border-radius: 98.5px;
`