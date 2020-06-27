import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./commonStyle.module.scss"

type PropsCheckboxType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Checkbox(props: PropsCheckboxType) {
    return (
        <div className={style.checkboxWrapper}>
            <input id="checkbox" className={style.checkbox} type="checkbox" {...props}/>
            <label htmlFor="checkbox"></label>
        </div>
    )
}

export default Checkbox