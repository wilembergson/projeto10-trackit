import axios from "axios"
import { useContext, useState} from "react"
import styled from "styled-components"
import DayWeek from "../dayWeek/DayWeek"
import UserContext from "../../contexts/UserContext"

export default function RegisterTask(){

    const {formRegisterHabit, setFormRegisterHabit, token} = useContext(UserContext)

   
    const [habitName, setHabitName] = useState('')
    const [days, setDays] = useState([])
    
    function addOrRemoveDays(select, numberDay){
        let daysCopy = days
        if(select){
            daysCopy = [...days, numberDay]
            setDays(daysCopy.sort(toCompare))
        }else{
            let index = daysCopy.indexOf(numberDay)
            daysCopy.splice(index, 1)
            setDays(daysCopy)
        }
    }

    function saveTask(){
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            {
                name: habitName,
                days: days
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            }
        )
        promise.then(response => console.log(response.data))
        promise.catch(error => console.log(error.response))

        clearFormRegisterHabit()
    }

    function clearFormRegisterHabit(){
        setHabitName('')
        setDays([])
        setFormRegisterHabit(false)
    }

    function toCompare(a, b) {
        return a - b;
    }

    return(
        <>
            {formRegisterHabit ? (
                <Section>
                    <form> 
                        <Input  type="text"
                                value={habitName}
                                onChange={e => setHabitName(e.target.value)}
                                placeholder="Nome do hábito"
                                required/>
                        <Week>
                            <DayWeek name="D" addOrRemoveDays={addOrRemoveDays} number={0}/>
                            <DayWeek name="S" addOrRemoveDays={addOrRemoveDays} number={1}/>
                            <DayWeek name="T" addOrRemoveDays={addOrRemoveDays} number={2}/>
                            <DayWeek name="Q" addOrRemoveDays={addOrRemoveDays} number={3}/>
                            <DayWeek name="Q" addOrRemoveDays={addOrRemoveDays} number={4}/>
                            <DayWeek name="S" addOrRemoveDays={addOrRemoveDays} number={5}/>
                            <DayWeek name="S" addOrRemoveDays={addOrRemoveDays} number={6}/>
                        </Week>
                        <Line>
                            <Button color='#52B6FF'
                                    background='#FFFFFF'
                                    onClick={()=> clearFormRegisterHabit()}>Cancelar
                            </Button>
                            <Button color='#FFFFFF'
                                    background='#52B6FF'
                                    onClick={()=> saveTask()}>Confirmar
                            </Button>
                        </Line>
                    </form>
                </Section>
                ):(<></>)
            }
        </>
    )
}

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 91%;
    margin-bottom: 10px;
    padding: 18px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Input = styled.input`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Week = styled.div`
    display: flex;
    margin: 10px 0 29px 0;
`
const Line = styled.div`
    display: flex;
    justify-content: right;
    position: relative;
`
const Button = styled.button`
    height: 35px;
    background: ${props => props.background};
    border-radius: 4.63636px;
    border: none;
    margin-left: 20px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.color};
`