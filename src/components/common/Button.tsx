import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./commonStyle.module.scss"

type PropsButtonType =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {typeRed?: boolean}

function Button(props: PropsButtonType) {
    const classes = props.typeRed ? `${style.button} ${style.typeRed}` : `${style.button}`;
    return <button className={classes} {...props} />
}

export default Button