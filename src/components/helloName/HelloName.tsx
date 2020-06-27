import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";

import style from "./HelloName.module.scss"
import sendIcon from "../../assets/img/send.png"

type PropsHellowNameType = {}

function HelloName(props: PropsHellowNameType) {

    type InputNameType = string
    type NameType = { id: string, name: InputNameType }
    type NamesType = Array<NameType>

    let [inputName, setInputName] = useState<InputNameType>('');
    let [names, setNames] = useState<NamesType>([]);

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.currentTarget.value);
    };

    const onKeyPressInputName = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickBtnAdd();
        }
    };

    const onClickBtnAdd = () => {
        if (inputName.trim()) {
            let newName = {id: v1(), name: inputName.trim()};
            alert(`Hello ${newName.name}`);
            setNames(prev => [newName, ...prev]);
            setInputName('');
        }
    };

    return (
        <div className={style.helloName}>
            <h2>dz : 3</h2>
            <div className={style.helloNameField}>
                <input type="text"
                       value={inputName}
                       onChange={onChangeInputName}
                       title={'Enter name'}
                       onKeyPress={onKeyPressInputName}/>
                <button onClick={onClickBtnAdd} disabled={!inputName.trim()}>
                    <img src={sendIcon} alt="bin"/>
                </button>
            </div>
            <span>Names amount : {names.length}</span>
        </div>
    )
}

export default HelloName
