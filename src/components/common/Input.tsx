import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./commonStyle.module.scss"

type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
        error?: boolean,
        onEnter?: () => void
    }

function Input(props: PropsInputType) {

    const {error, onEnter, ...otherProps} = props

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            props.onEnter && props.onEnter()
        }
    };

    const classes = props.error ? `${style.input} ${style.error}` : `${style.input}`;
    return <input className={classes} type="text" {...otherProps} onKeyPress={pressEnter}/>
}

export default Input