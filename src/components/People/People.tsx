import React from "react";
import style from "./People.module.scss"
import {PeronType} from "../../state/homeWorkReducer";
import Button from "../common/Button/Button";

type PropsPeopleType = {
    people: PeronType[]
    showAll?: () => void
    sortUp: () => void
    sortDown: () => void
    checkAge: () => void
}

function People(props: PropsPeopleType) {
    return (
        <div className={style.people}>
            <ul>
                {
                    props.people.map(person => {
                        return <li key={person.id}>
                            <span>Name: {person.name}</span><span>Age: {person.age}</span>
                        </li>
                    })
                }
            </ul>
            {props.showAll && <Button onClick={props.showAll}>Show all</Button>}
            <Button onClick={props.sortUp}>Sort up</Button>
            <Button onClick={props.sortDown}>Sort down</Button>
            <Button onClick={props.checkAge}>Over 18</Button>
        </div>
    )
}

export default People