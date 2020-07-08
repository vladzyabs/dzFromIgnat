import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Checkbox.module.scss"

type PropsCheckboxType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    id: string
    propsOnChange: (checked: boolean) => void
}

function Checkbox(props: PropsCheckboxType) {

    const {propsOnChange, ...restProps} = props;

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        propsOnChange && propsOnChange(e.currentTarget.checked);
    };

    return (
        <div className={style.checkboxWrapper}>
            <input id={restProps.id}
                   className={style.checkbox}
                   type="checkbox"
                   onChange={change}
                   {...restProps}/>
            <label htmlFor={restProps.id}></label>
        </div>
    )
}

export default Checkbox