import { useState } from 'react';
import {BsFillCheckSquareFill} from 'react-icons/bs'
import styled from "styled-components";

export default function TodayHabit(props){
    const {id, name, currentSequence, highestSequence} = props
    const [color, setColor] = useState('#EBEBEB')

    function changeColor(){
        if(color === '#EBEBEB'){
            setColor('#8FC549')
        }else{
            setColor('#EBEBEB')
        }
    }

    return(
        <Section>
            <Informations>
                <Title>{name}</Title>
                <Subtitle>{`Sequência atual: ${currentSequence} dias`}</Subtitle>
                <Subtitle>{`Seu record: ${highestSequence} dias`}</Subtitle>
            </Informations>
            <div onClick={()=> changeColor()}>
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`