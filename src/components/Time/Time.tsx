import React, {useState} from "react";
import moment from "moment";
import style from "./Time.module.scss";
import Button from "../common/Button/Button";

function Time(props: {}) {

    const [time, setTime] = useState(moment().format('h:mm:ss'))
    const date = moment().format('D MMMM YYYY')
    const [timerId, setTimerId] = useState()

    const runTime = () => {
        timerId && clearInterval(timerId);
        const timer_id = setInterval(() => setTime(moment().format('h:mm:ss')), 1000)
        setTimerId(timer_id)
    }

    const stopTime = () => {
        timerId && clearInterval(timerId)
    }

    return (
        <div className={style.wrapper}>
            <h3>dz : 9</h3>
            <div className={style.time}>
                current time: <span>{time}</span>
                <div className={style.date}>date: <span>{date}</span></div>
            </div>
            <div className={style.control}>
                <Button onClick={() => runTime()}>run</Button>
                <Button onClick={() => {stopTime()}}>stop</Button>
            </div>
        </div>
    )
}

export default Time