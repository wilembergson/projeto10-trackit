import { useEffect, useState } from "react";
import { Div } from "../dayWeek/DayWeek";

export default function SavedDayWeek(props){
    const {name, number, days} = props
    const [selectedDay, setSelectedDay] = useState({color:'#DBDBDB', background:'#FFFFFF'})

    useEffect(()=> {
        if(days.includes(number)){
            setSelectedDay({color:'#FFFFFF', background:'#DBDBDB'})
        }
    },[])

    return(
        <Div    color={selectedDay.color}
                background={selectedDay.background}>
            {name}
        </Div>
    )
}