import React, {useState} from "react";
import style from "./Demo.module.scss";
import Select from "../common/Select/Select";

function DemoSelect() {

    const selectValue = ['1 option', '2 option', '3 option'];
    const [value, setValue] = useState(selectValue[0])
    const onSelectItem = (item: string) => {
        setValue(item)
        alert(item)
    }

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 7</h3>
            <Select selectValue={selectValue} value={value} onSelectChange={onSelectItem}/>
        </div>
    )
}

export default DemoSelect