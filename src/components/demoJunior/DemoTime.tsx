import React, {useState} from "react";
import moment from "moment";
import style from "./Demo.module.scss";

function Time() {

    const [time, setTime] = useState(moment().format('h:mm:ss'))
    const [date, setDate] = useState(moment().format('D MMMM YYYY'))
    const [timerId, setTimerId] = useState<any>(moment())


    const runTime = () => {
        clearInterval(timerId);
        const timer_id = setInterval(() => setTime(moment().format('h:mm:ss')), 1000)
        setTimerId(timer_id)
    }

    const stopTime = () => {
        clearInterval(timerId)
    }

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 9</h3>
            <div className={style.time}>
                current time: <span>{time}</span>
                <div className={style.date}>date: <span>{date}</span></div>
            </div>
            <button onClick={() => runTime()}>run</button>
            <button onClick={() => {stopTime()}}>stop</button>
        </div>
    )
}

export default Time