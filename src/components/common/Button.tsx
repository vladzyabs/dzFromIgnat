import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./commonStyle.module.scss"

type PropsButtonType =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {red?: boolean}

function Button(props: PropsButtonType) {
    const {red, ...othetProps} = props
    const classes = props.red ? `${style.button} ${style.typeRed}` : `${style.button}`;
    return <button className={classes} {...othetProps} />
}

export default Button