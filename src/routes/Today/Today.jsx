import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../../components/menu/Menu";
import TodayHabit from "../../components/todayHabit/TodayHabit";
import Top from "../../components/Top/Top";
import UserContext from "../../contexts/UserContext";
import { Main } from "../habits/Habits";

export default function Today(){
    const {token, todayDate, todayHabits, setTodayHabits, donePercentage} = useContext(UserContext)
 
    const [weekDay, setWeekDay] = useState('')
    const [monthDay, setMonthDay] = useState(todayDate.monthDay)
    const [month, setMonth] = useState(todayDate.month + 1)
    const colors = {green: '#8FC549', grey: '#BABABA'}

    useEffect(()=>{
        setWeekDay(getWeekDay())
        addZero(monthDay, setMonthDay)
        addZero(month, setMonth)
    },[])

    useEffect(()=> {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            } 
        )
        promise.then(response => setTodayHabits(response.data))
        promise.catch(error => console.log(error.response))
    },[todayHabits])

    //Adiciona "0" quando o dia ou mẽs é menor que 10
    function addZero(number, set){
        if(number < 10){
            set(`0${number}`)
        }
    }

    function getWeekDay(){
        switch(todayDate.weekDay){
            case 0:
                return 'Domingo'
                break
            case 1:
                return 'Segunda'
                break
            case 2:
                return 'Terça'
                break
            case 3:
                return 'Quarta'
                break
            case 4:
                return 'Quinta'
                break
            case 5:
                return 'Sexta'
                break
            case 6:
                return 'Sábado'
                break
            default:
                alert('Deu algum erro.')
        }
    }

    return(
        <>
            <Top/>
            <Main>
                <Title>{weekDay}, {monthDay}/{month}</Title>
                {(donePercentage === 0) ? <Subtitle color={colors.grey}>Nenhum hábito concluído ainda</Subtitle>
                                        : <Subtitle color={colors.green}>{donePercentage}% dos hábitos concluídos</Subtitle>}
                
                {todayHabits.map(habit => <TodayHabit   id={habit.id}
                                                        name={habit.name}
                                                        done={habit.done}
                                                        currentSequence={habit.currentSequence}
                                                        highestSequence={habit.highestSequence}/>)
                }
            </Main>
            <Menu/>
        </>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 28px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const Subtitle = styled.h3`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.color};
    margin-bottom: 28px;
`