import React, {useState} from "react";
import EditableSpan from "../components/common/EditableSpan";
import style from "../style/style.module.scss"

function Junior() {

    let [valueEditSpan, setValueEditSpan] = useState<string>('double click');
    let changeHandler = (title: string) => setValueEditSpan(title);

    return (
        <div>
            <h1>Junior</h1>
            <div className={style.demoEditSpan}>
                <h3>dz : 6</h3>
                <EditableSpan value={valueEditSpan} changeHandler={changeHandler}/>
            </div>
        </div>
    )
}

export default Junior