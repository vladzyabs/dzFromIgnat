import React, {useState} from "react";
import Input from "../Input/Input";

import style from "./EditableSpan.module.scss"

type PropsEditableSpanType = {
    value: string
    changeHandler: (title: string) => void
}

function EditableSpan(props: PropsEditableSpanType) {

    let [editMode, setEditMOde] = useState<boolean>(false);

    const onEditMode = () => setEditMOde(true);
    const offEditMode = () => setEditMOde(false);

    return !editMode
        ? <span className={style.editSpan}
                title={'Double click on item'}
                onDoubleClick={onEditMode}>{props.value}</span>
        : <Input value={props.value}
                 autoFocus
                 onBlur={offEditMode}
                 onEnter={offEditMode}
                 propsOnChange={props.changeHandler}/>
}

export default EditableSpan