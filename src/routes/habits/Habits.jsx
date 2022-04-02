import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import ItemHabit from "../../components/itemHabit/ItemHabit"
import Menu from "../../components/menu/Menu"
import RegisterTask from "../../components/registerHabit/RegisterHabit"
import Top from "../../components/Top/Top"
import UserContext from "../../contexts/UserContext"

export default function Habits(){
    const { setFormRegisterHabit, token} = useContext(UserContext)
    const [habitList, setHabitList] = useState([])
    const mensage = 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'

    useEffect(()=> {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            } 
        )
        promise.then(response => setHabitList(response.data))
        promise.catch(error => console.log(error.response))
    },[habitList])

    return(
        <>
            <Top/>
            <Main>
                <HabitsTitle>
                    Meus hábitos
                    <AddButton onClick={() => setFormRegisterHabit(true)}>+</AddButton>
                </HabitsTitle>
                <RegisterTask/>
                {
                    (habitList.length !== 0) ? habitList.map(habit => 
                        <ItemHabit id={habit.id} title={habit.name} days={habit.days}/>
                    )
                    : <Mensage>{mensage}</Mensage>
                }
            </Main>
            <Menu/>
        </>
    )
}
const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 70px 0px 0 0px;
    padding: 0 17px;
    background: #E5E5E5;
    height: 710px;
    overflow-y: scroll;
`
const HabitsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 28px 0;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
`
const Mensage = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`