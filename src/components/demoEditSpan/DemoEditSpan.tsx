import React, {useState} from "react";
import style from "./DemoEditSpan.module.scss";
import EditableSpan from "../common/EditableSpan";
import Button from "../common/Button";
import {restoreState, saveState} from "../../utils/utils";


function DemoEditSpan() {
    let state: string;
    let [valueEditSpan, setValueEditSpan] = useState<string>('double click');
    let changeHandler = (title: string) => setValueEditSpan(title);

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 6</h3>
            <EditableSpan value={valueEditSpan} changeHandler={changeHandler}/>
            <div>
                <Button onClick={() => {
                    saveState<string>("DemoEditSpan", valueEditSpan);
                    alert(`"${valueEditSpan}" saved successfully`)
                }}>Save</Button>
                <Button onClick={() => {
                    state = restoreState<string>("DemoEditSpan", valueEditSpan);
                    setValueEditSpan(state)
                }}>Pull out</Button>
            </div>
        </div>
    )
}

export default DemoEditSpan