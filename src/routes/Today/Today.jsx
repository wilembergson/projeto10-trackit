import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Section } from "../../components/itemHabit/ItemHabit";
import Menu from "../../components/menu/Menu";
import TodayHabit from "../../components/todayHabit/TodayHabit";
import Top from "../../components/Top/Top";
import UserContext from "../../contexts/UserContext";
import { Main, Title } from "../habits/Habits";

export default function Today(){
    const {token} = useContext(UserContext)
    const [todayHabits, setTodayHabits] = useState([])

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

    return(
        <>
            <Top/>
            <Main>
                <Title>Segunda, 17/05</Title>
                {todayHabits.map(habit => <TodayHabit   id={habit.id}
                                                        name={habit.name}
                                                        currentSequence={habit.currentSequence}
                                                        highestSequence={habit.highestSequence}/>)
                }
            </Main>
            <Menu/>
        </>
    )
}

