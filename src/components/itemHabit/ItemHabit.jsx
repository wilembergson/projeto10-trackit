import styled from "styled-components";
import SavedDayWeek from "../savedDayWeek/SavedDayWeek";

export default function ItemHabit(props){
    const {title, days} = props

    const daysCopy = days

    return(
        <Section>
            <H3>{title}</H3>
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
const H3 = styled.h2`
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