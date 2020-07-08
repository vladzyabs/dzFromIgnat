import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./Button.module.scss"

type PropsButtonType =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {red?: boolean}

function Button(props: PropsButtonType) {
    const {red, ...restProps} = props;
    const classes = red ? `${style.button} ${style.typeRed}` : `${style.button}`;
    return <button className={classes} {...restProps} />
}

export default Button