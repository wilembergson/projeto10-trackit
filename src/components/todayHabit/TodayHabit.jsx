import axios from 'axios';
import { Suspense, useContext, useEffect, useState } from 'react';
import {BsFillCheckSquareFill} from 'react-icons/bs'
import styled from "styled-components";
import UserContext from '../../contexts/UserContext';

export default function TodayHabit(props){
    const habitColors = {active:'#8FC549', disable:'#EBEBEB', subtitle:'#666666'}

    const {token} = useContext(UserContext)
    const {id, name, done, currentSequence, highestSequence} = props
    const [color, setColor] = useState(habitColors.disable)

    useEffect(()=>{
        if(done){
            setColor(habitColors.active)
        }
    },[])

    function markOfMarkOffHabit(){
        if(done === false){
            setColor(habitColors.active)
            markAsDone()
        }else{
            setColor(habitColors.disable)
            markAsNotDone()
        }
    }

    function markAsDone(){
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            } 
        )
        promise.then(response => console.log('Habit done.'))
        promise.catch(error => console.log( error.response))
    }

    function markAsNotDone(){
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            } 
        )
        promise.then(response => console.log('Habit not done.'))
        promise.catch(error => console.log(error.response))
    }

    return(
        <Section>
            <Informations>
                <Title>{name}</Title>
                <Subtitle color={habitColors.subtitle}>
                    {`Sequência atual`} 
                    <Subtitle color={currentSequence > 0 ? habitColors.active : habitColors.subtitle}>
                        {`: ${currentSequence} dias`}
                    </Subtitle>
                </Subtitle>
                <Subtitle color={habitColors.subtitle}>
                    {`Seu record`}
                    <Subtitle color={(currentSequence === highestSequence && highestSequence > 0) ? habitColors.active : habitColors.subtitle}>
                        {`: ${highestSequence} dias`}
                    </Subtitle>
                </Subtitle>
            </Informations>
            <div onClick={()=> markOfMarkOffHabit()}>
                <BsFillCheckSquareFill size={69} color={color}/>
            </div>
        </Section>
    )
}
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    aling-items: center;
    width: 91%;
    margin-bottom: 10px;
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Informations = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Subtitle = styled.h3`
    display: flex;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${props => props.color};
`