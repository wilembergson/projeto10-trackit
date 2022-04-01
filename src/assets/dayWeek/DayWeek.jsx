import { useEffect, useState } from "react"
import styled from "styled-components"

export default function DayWeek(props){
    const {name, addOrRemoveDays, number} = props
    const [selectedDay, setSelectedDay] = useState({color:'#DBDBDB', background:'#FFFFFF'})

    const [selected, setSelected] = useState(false)

    function changeSelected(){
        if(selected === true){
            setSelectedDay({color:'#DBDBDB', background:'#FFFFFF'})
            setSelected(false)
        }else{
            setSelectedDay({color:'#FFFFFF', background:'#DBDBDB'})
            setSelected(true)
        }
    }

    useEffect(()=>{
        addOrRemoveDays(selected, number)
    },[selected])

    return(
        <Div    color={selectedDay.color}
                background={selectedDay.background}
                onClick={()=> changeSelected()}>
            {name}
        </Div>
    )
}

const Div = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: ${props => props.background};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.color};
`