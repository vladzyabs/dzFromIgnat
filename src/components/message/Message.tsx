import React from "react"
import style from "./Message.module.css"


type PropsMessageType = {
    userName: string,
    userPhoto: string,
    message: string,
    time: string,
}

function Message(props: PropsMessageType) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.userPic}>
                <img src={props.userPhoto} alt={''}/>
            </div>
            <div className={style.message}>
                <span className={style.messageName}><a href='#/'>{props.userName}</a></span>
                <span className={style.messageText}>{props.message}</span>
                <span className={style.messageTime}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message