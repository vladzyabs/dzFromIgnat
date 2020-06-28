import React, {useState} from "react";
import {v1} from "uuid";

import style from "./HelloName.module.scss"
import sendIcon from "../../assets/img/send.png"
import Button from "../common/Button";
import Input from "../common/Input";

type PropsHellowNameType = {}

function HelloName(props: PropsHellowNameType) {

    type InputNameType = string
    type NameType = { id: string, name: InputNameType }
    type NamesType = Array<NameType>

    let [inputName, setInputName] = useState<InputNameType>('');
    let [names, setNames] = useState<NamesType>([]);
    let [errorInput, setErrorInput] = useState<boolean>(false);

    const onClickBtnAdd = () => {
        if (inputName.trim()) {
            let newName = {id: v1(), name: inputName.trim()};
            alert(`Hello ${newName.name}`);
            setErrorInput(false);
            setNames(prev => [newName, ...prev]);
            setInputName('');
        }
        else {
            setErrorInput(true)
        }
    };

    return (
        <div className={style.helloName}>
            <h2>dz : 3</h2>
            <div className={style.helloNameField}>
                <Input type="text"
                       value={inputName}
                       propsOnChange={setInputName}
                       error={errorInput}
                       setError={setErrorInput}
                       onEnter={onClickBtnAdd}/>
                <Button onClick={onClickBtnAdd} disabled={!inputName.trim()}>
                    <img src={sendIcon} alt="bin"/>
                </Button>
            </div>
            <span>Names amount : {names.length}</span>
        </div>
    )
}

export default HelloName