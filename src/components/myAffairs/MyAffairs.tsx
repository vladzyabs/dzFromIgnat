import React from "react";
import {AffairsType, ChangeFilterType, RemoveAffairType} from "../../types";
import Button from "../common/ButtonNya";

import style from "./MyAffairs.module.scss"
import binIcon from "../../assets/img/bin.png"

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
                <Button onClick={ onClickRemove }>
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