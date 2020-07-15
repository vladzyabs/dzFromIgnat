import React, {useState} from "react";
import style from "./Demo.module.scss";
import Radio from "../common/Radio/Radio";

function DemoSelect() {

    const radioValue = ['radio 1', 'radio 2', 'radio 3'];
    const [value, setValue] = useState(radioValue[0])
    const onSelectRadio = (value: string) => {
        setValue(value)
        alert(value)
    }

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 7</h3>
            <Radio radioName={'demo'} value={value} radioValue={radioValue} onRadioChange={onSelectRadio} radioTitle={'Demo radio'}/>
        </div>
    )
}

export default DemoSelect