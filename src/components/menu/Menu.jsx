import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";

export default function Menu(){
    const {todayHabits, donePercentage, setDonePercentage} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        completePercentage()
    },[todayHabits])

    function completePercentage(){
        let cont = 0
        todayHabits.forEach(habit =>{
            if(habit.done){
                cont += 1
            }
        })
        setDonePercentage((cont/todayHabits.length)*100)
    }

    return(
        <Footer>
            <Item onClick={()=> navigate('/habitos')}>Hábitos</Item>
            <Percentage  onClick={()=> navigate('/hoje')}>
            <CircularProgressbar
                value={donePercentage}
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
            <Item onClick={()=> navigate('/historico')}>Histórico</Item>
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
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