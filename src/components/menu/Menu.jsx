import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function Menu(){
    const navigate = useNavigate()

    return(
        <Footer>
            <Item onClick={()=> navigate('/habitos')}>Hábitos</Item>
            <Percentage  onClick={()=> navigate('/hoje')}>
            <CircularProgressbar
                value={63}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent"
                })}
            />
            </Percentage>
            <Item>Histórico</Item>
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    background: #ffffff;
`
const Item = styled.label`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
const Percentage = styled.div`
    position: relative;
    bottom: 20px;
    width: 91px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
`