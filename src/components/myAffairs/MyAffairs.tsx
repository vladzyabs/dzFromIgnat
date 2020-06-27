import React from "react";
import {AffairsType, ChangeFilterType, RemoveAffairType} from "../../ts/types";

import style from "./MyAffairs.module.scss"
import binIcon from "../../assets/img/bin.png"
import Button from "../common/Button";

type PropsMyAffairsType = {
    affairs: AffairsType,
    removeAffair: RemoveAffairType,
    changeFilter: ChangeFilterType,
}

function MyAffairs(props: PropsMyAffairsType) {

    const returnAffairs = props.affairs.map( (affair) => {

        const onClickRemove = () => props.removeAffair(affair.id);

        return (
            <li key={affair.id} className={style.affair}>
                <span>{affair.title}</span>
                <span>{affair.priority}</span>
                <Button onClick={ onClickRemove } typeRed={true}>
                    <img src={binIcon} alt="bin icon"/>
                </Button>
            </li>
        )
    } );

    return (
        <div className={style.myAffairs}>
            <h2>dz : 2</h2>

            <ul>
                { returnAffairs }
            </ul>

            <div className={style.sortingBtns}>
                <Button onClick={ () => {props.changeFilter("all")} }>all</Button>
                <Button onClick={ () => {props.changeFilter("low")} }>low</Button>
                <Button onClick={ () => {props.changeFilter("medium")} }>medium</Button>
                <Button onClick={ () => {props.changeFilter("high")} }>high</Button>
            </div>

        </div>
    )
}

export default MyAffairs