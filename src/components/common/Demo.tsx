import React from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";

import style from "./commonStyle.module.scss"

function Demo() {
    return (
        <div className={style.demo}>
            <h2>dz : 4</h2>
            <Button>Button</Button>
            <Input/>
            <Checkbox/>
        </div>
    )
}

export default Demo