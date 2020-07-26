import React, {useState} from "react";
import style from "./Demo.module.scss";
import People from "../People/People";
import {v1} from "uuid";
import {checkPeopleByAgeAC, hwReducer, StateType, sortPeopleAC} from "../../store/homeWorkReducer";

function DemoPeople() {

    const initialState = {
        people: [
        {id: v1(), name: 'Dasha', age: 24},
        {id: v1(), name: 'Andrey', age: 14},
        {id: v1(), name: 'Elena', age: 18},
        {id: v1(), name: 'Sasha', age: 21},
        {id: v1(), name: 'Boris', age: 30},
        {id: v1(), name: 'Masha', age: 17},
    ]}

    const [people, setPeople] = useState<StateType>(initialState)

    const sortUp = () => {
        setPeople(hwReducer(people, sortPeopleAC("up")))
    }

    const sortDown = () => {
        setPeople(hwReducer(people, sortPeopleAC("down")))
    }
    const checkAge = () => {
        setPeople(hwReducer(people, checkPeopleByAgeAC(18)))
    }
    const showAll = () => setPeople(initialState)

    return (
        <div className={style.demoEditSpan}>
            <h3>dz : 8</h3>
            <People people={people} showAll={showAll} sortUp={sortUp} sortDown={sortDown} checkAge={checkAge}/>
        </div>
    )
}

export default DemoPeople