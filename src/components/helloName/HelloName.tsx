import React, {ChangeEvent, useState} from "react";
import {v1} from "uuid";
import Button from "../common/ButtonNya";
import Input from "../common/InputNya";

import style from "./HelloName.module.scss"
import sendIcon from "../../assets/img/send.png"

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

    const onKeyPressInputName = () => onClickBtnAdd();

    const onClickBtnAdd = () => {
        if (inputName.trim()) {
            let newName = {id: v1(), name: inputName.trim()};
            alert(`Hello ${newName.name}`);
            setNames(prev => [newName, ...prev]);
            setInputName('');
        } else {
            setEmptyField(true)
        }
    };

    return (
        <div className={style.helloName}>
            <h2>dz : 3</h2>
            <div className={style.helloNameField}>
                <Input type="text"
                       value={inputName}
                       onChange={onChangeInputName}
                       title={'Enter name'}
                       error={emptyField ? 'You did not enter a name' : ''}
                       onEnter={() => onKeyPressInputName()}/>
                <Button onClick={onClickBtnAdd} disabled={!inputName.trim()}>
                    <img src={sendIcon} alt="bin"/>
                </Button>
            </div>
            <span>Names amount : {names.length}</span>
        </div>
    )
}

export default HelloName
