import { useContext } from "react"
import styled from "styled-components"
import Menu from "../../components/menu/Menu"
import RegisterTask from "../../components/registerHabit/RegisterHabit"
import Top from "../../components/Top/Top"
import UserContext from "../../contexts/UserContext"

export default function Habits(){
    const { setFormRegisterTask } = useContext(UserContext)

    return(
        <>
            <Top/>
            <Main>
                <HabitsTitle>
                    Meus hábitos
                    <AddButton onClick={() => setFormRegisterTask(true)}>+</AddButton>
                </HabitsTitle>
                <RegisterTask/>
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