import React, {KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./common.module.scss"

export type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

function Input(props: PropsInputType) {

    const {onEnter, error, ...restProps} = props;

    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {onEnter && onEnter()}
    };

    return (
        <>
            <input className={`${style.inputNya} ${error && style.error}`}
                   {...restProps}
                   type="text"
                   onKeyPress={onKeyPressEnter}
                   placeholder={error ? error : props.title}
            />
        </>
    );
}

export default Input