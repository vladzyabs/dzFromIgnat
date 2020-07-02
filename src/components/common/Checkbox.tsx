import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./commonStyle.module.scss"

type PropsCheckboxType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    id: string
    propsOnChange: (checked: boolean) => void
}

function Checkbox(props: PropsCheckboxType) {

    const {propsOnChange, ...otherProps} = props;

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        propsOnChange && propsOnChange(e.currentTarget.checked);
    };

    return (
        <div className={style.checkboxWrapper}>
            <input id={otherProps.id}
                   className={style.checkbox}
                   type="checkbox"
                   onChange={change}
                   {...otherProps}/>
            <label htmlFor={otherProps.id}></label>
        </div>
    )
}

export default Checkbox