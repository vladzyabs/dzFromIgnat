import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "./HelloName.module.css"
import {v1} from "uuid";

type PropsHellowNameType = {}

function HelloName(props: PropsHellowNameType) {

    type InputNameType = string
    type NameType = { id: string, name: InputNameType }
    type NamesType = Array<NameType>

    let [inputName, setInputName] = useState<InputNameType>('');
    let [names, setNames] = useState<NamesType>([]);
    let [emptyField, setEmptyField] = useState<boolean>(false);

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.currentTarget.value);
        setEmptyField(false)
    };

    const onKeyPressInputName = (e: KeyboardEvent<HTMLInputElement>) => e.charCode === 13 && onClickBtnAdd();

    const onClickBtnAdd = () => {
        if (inputName) {
            alert(`Hello ${inputName}`);
            let newName = {id: v1(), name: inputName};
            setNames(prev => [newName, ...prev]);
            setInputName('');
        } else {
            setEmptyField(true)
        }
    };

    return (
        <div className={style.hellowName}>
            <h2>dz : 3</h2>
            <div>
                <input type="text"
                       value={inputName}
                       onChange={onChangeInputName}
                       onKeyPress={onKeyPressInputName}
                       className={emptyField ? style.error : ''}/>
                <button onClick={onClickBtnAdd} disabled={!inputName}>Set</button>
            </div>
            <span>Amount тnames: {names.length}</span>
        </div>
    )
}

export default HelloName