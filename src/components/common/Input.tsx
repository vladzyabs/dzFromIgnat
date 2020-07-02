import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, ChangeEvent} from "react";
import style from "./commonStyle.module.scss"

type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    error?: boolean,
    onEnter?: () => void
    propsOnChange?: (value: string) => void
    setError?: (value: boolean) => void
}

function Input(props: PropsInputType) {

    const {error, onEnter, propsOnChange, setError, ...otherProps} = props;

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onEnter && onEnter()
        }
    };

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        if(setError && e.currentTarget.value.trim()) {
            setError(false)
        }
        propsOnChange && propsOnChange(e.currentTarget.value);
    };

    const classes = error ? `${style.input} ${style.error}` : `${style.input}`;
    return <input className={classes}
                  type="text"
                  onKeyPress={pressEnter}
                  onChange={change}
                  {...otherProps}/>
}

export default Input