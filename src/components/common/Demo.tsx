import React, {useState} from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";

import style from "./commonStyle.module.scss"

function Demo() {

    let [check, setCheck] = useState<boolean>(false)
    let onCheck = (value: boolean) => setCheck(value);

    return (
        <div className={style.demo}>
            <h2>dz : 4</h2>
            <Button>Button</Button>
            <Input/>
            <Checkbox id={'checkDemo'} checked={check} propsOnChange={onCheck}/>
        </div>
    )
}

export default Demo