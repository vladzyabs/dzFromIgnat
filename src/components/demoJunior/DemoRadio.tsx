import React from "react";
import style from "./DemoEditSpan.module.scss";
import Radio from "../common/Radio/Radio";

function DemoSelect() {

    const radioValue = ['radio 1', 'radio 2', 'radio 3'];
    const onSelectRadio = (value: string) => {alert(value)}

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 7</h3>
            <Radio radioName={'demo'} radioValue={radioValue} onRadioChange={onSelectRadio} radioTitle={'Demo radio'}/>
        </div>
    )
}

export default DemoSelect