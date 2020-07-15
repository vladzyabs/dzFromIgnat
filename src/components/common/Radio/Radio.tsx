import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Radio.module.scss"
import {v1} from "uuid";

type PropsRadioType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    radioValue: string[]
    radioName: string
    onRadioChange: (value: string) => void
    radioTitle?: string
}

function Radio(props: PropsRadioType) {

    const {radioValue, radioName, onRadioChange, radioTitle, ...restProps} = props;

    return (
        <div className={style.radioGroup}>
            {radioTitle && <p>{radioTitle}</p>}
            {radioValue.map((item, index) => {
                const id: string = v1();
                return <div key={index} className={style.radio}>
                    <input id={id}
                           className={style.radioInput}
                           type="radio"
                           name={radioName}
                           checked={item === props.value}
                           onChange={() => onRadioChange(item)}
                           {...restProps}/>
                    <label htmlFor={id}>{item}</label>
                </div>
            })}
        </div>
    )
}

export default Radio