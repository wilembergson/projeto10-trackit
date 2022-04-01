import { useContext} from "react"
import styled from "styled-components"
import DayWeek from "../../assets/dayWeek/DayWeek"
import UserContext from "../../contexts/UserContext"

export default function RegisterTask(){

    const {formRegisterTask, setFormRegisterTask} = useContext(UserContext)
    /*const [display, setDisplay] = useState('none')

    useEffect(() => {
        if(formRegisterTask === true){
            setDisplay('flex')
        }else{
            setDisplay('none')
        }
    },[formRegisterTask])*/

    return(formRegisterTask ? (
        <Section>
            <form> 
                <Input placeholder="Nome do hábito"/>
                <Week>
                    <DayWeek name="D"/>
                    <DayWeek name="S"/>
                    <DayWeek name="T"/>
                    <DayWeek name="Q"/>
                    <DayWeek name="Q"/>
                    <DayWeek name="S"/>
                    <DayWeek name="S"/>
                </Week>
                <Line>
                    <Button color='#52B6FF'
                            background='#FFFFFF'
                            onClick={()=> setFormRegisterTask(false)}
                            >Cancelar</Button>
                    <Button color='#FFFFFF' background='#52B6FF'>Confirmar</Button>
                </Line>
            </form>
        </Section>
        ):(<></>)
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 91%;
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