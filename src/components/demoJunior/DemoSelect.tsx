import React from "react";
import style from "./DemoEditSpan.module.scss";
import Select from "../common/Select/Select";

function DemoSelect() {

    const selectValue = ['1 option', '2 option', '3 option'];
    const selectItem = (item: string) => alert(item)

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 7</h3>
            <Select value={selectValue} onChangee={selectItem}/>
        </div>
    )
}

export default DemoSelect