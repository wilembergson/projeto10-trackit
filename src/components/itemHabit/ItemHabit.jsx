import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import SavedDayWeek from "../savedDayWeek/SavedDayWeek";

export default function ItemHabit(props){
    const {token}  = useContext(UserContext)
    const {id, title, days} = props

    function deleteHabit(id){
        const confirmation = window.confirm("Tem certeza que deseja deletar este hábito?")

        if(confirmation){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            promise.then(response => console.log("Deleção confirmada."))
            promise.catch(error => console.log(error.response))
        }
    }

    return(
        <Section>
            <H2>{title}
                <Delete>
                    <div onClick={() => deleteHabit(id)}>
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                </Delete>
            </H2>
            
            <Week>
                    <SavedDayWeek name="D" number={7} days={days}/>
                    <SavedDayWeek name="S" number={1} days={days}/>
                    <SavedDayWeek name="T" number={2} days={days}/>
                    <SavedDayWeek name="Q" number={3} days={days}/>
                    <SavedDayWeek name="Q" number={4} days={days}/>
                    <SavedDayWeek name="S" number={5} days={days}/>
                    <SavedDayWeek name="S" number={6} days={days}/>

            </Week>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 91%;
    margin-bottom: 10px;
    padding: 18px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Week = styled.div`
    display: flex;
`
const H2 = styled.h2`
    display:flex;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Delete = styled.div`
    position: relative;
    top: 5px:
    right: 5px;
`