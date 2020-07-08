import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, ChangeEvent} from "react";
import style from "./Input.module.scss"

type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    error?: boolean,
    onEnter?: () => void
    propsOnChange?: (value: string) => void
    setError?: (value: boolean) => void
}

function Input(props: PropsInputType) {

    const {error, onEnter, propsOnChange, setError, ...restProps} = props;

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onEnter && onEnter()
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(setError && e.currentTarget.value.trim()) {
            setError(false)
        }
        propsOnChange && propsOnChange(e.currentTarget.value);
    };

    const onBlur = () => setError && setError(false);

    const classes = error ? `${style.input} ${style.error}` : `${style.input}`;

    return <input className={classes}
                  type="text"
                  onKeyPress={pressEnter}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...restProps}/>
}

export default Input