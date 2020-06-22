import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import style from "./common.module.scss"

export type PropsButtonType =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {};

function Button(props: PropsButtonType) {

    const {...restProps} = props;

    return (
        <>
            <button className={style.buttonNya} {...restProps}>{props.children}</button>
        </>
    )
}

export default Button

