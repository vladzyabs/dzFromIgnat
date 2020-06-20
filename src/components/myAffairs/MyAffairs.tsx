import React from "react";
import style from "./MyAffairs.module.css"
import {AffairsType, ChangeFilterType, RemoveAffairType} from "../../types";

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
                <button onClick={ onClickRemove }>X</button>
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
                <button onClick={ () => {props.changeFilter("all")} }>all</button>
                <button onClick={ () => {props.changeFilter("low")} }>low</button>
                <button onClick={ () => {props.changeFilter("medium")} }>medium</button>
                <button onClick={ () => {props.changeFilter("high")} }>high</button>
            </div>

        </div>
    )
}

export default MyAffairs