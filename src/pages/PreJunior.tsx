import React, {useState} from "react";
import {AffairsType, ChangeFilterType, FilterValueType, RemoveAffairType} from "../ts/types";
import {v1} from "uuid";
import MyName from "../components/myName/MyName";
import Demo from "../components/common/Demo";
import HelloName from "../components/helloName/HelloName";
import MyAffairs from "../components/myAffairs/MyAffairs";
import Message from "../components/message/Message";

function PreJunior() {

    let [affairs, setAffairs] = useState<AffairsType>([
        {id: v1(), title: 'ReactJS', priority: 'high'},
        {id: v1(), title: 'JS', priority: 'medium'},
        {id: v1(), title: 'HTML', priority: 'high'},
        {id: v1(), title: 'CSS', priority: 'high'},
        {id: v1(), title: 'Less', priority: 'low'},
        {id: v1(), title: 'Scss', priority: 'medium'},
        {id: v1(), title: 'JQuery', priority: 'low'},
        {id: v1(), title: 'Git', priority: 'medium'},
        {id: v1(), title: 'VueJS', priority: 'low'},
        {id: v1(), title: 'Angular', priority: 'low'},
    ]);
    const removeAffair: RemoveAffairType = (id) =>
        setAffairs(prev => prev.filter(affair => affair.id !== id));

    let affairsWithFilter: AffairsType = affairs;

    let [filter, setFilter] = useState<FilterValueType>('all');

    switch (filter) {
        case "low":
            affairsWithFilter = affairs.filter(affair => affair.priority === filter);
            break;
        case "medium":
            affairsWithFilter = affairs.filter(affair => affair.priority === filter);
            break;
        case "high":
            affairsWithFilter = affairs.filter(affair => affair.priority === filter);
            break;
        default:
            affairsWithFilter = affairs;
            break;
    }
    const changeFilter: ChangeFilterType = (value) => setFilter(value);

    return (
        <div className='App'>

            <h1>Pre Junior</h1>

            <MyName surname={fullName.surname}
                    name={fullName.name}
                    patronymic={fullName.patronymic}/>

            <Demo/>

            <HelloName/>

            <MyAffairs affairs={affairsWithFilter}
                       removeAffair={removeAffair}
                       changeFilter={changeFilter}/>

            <Message userName={messageData.userName}
                     userPhoto={messageData.photo}
                     message={messageData.message}
                     time={messageData.time()}/>

        </div>
    );
}

//data

const fullName = {
    surname: 'Zyabsky',
    name: 'Vladislav',
    patronymic: 'Ivanovich',
};

let messageData = {
    id: 1,
    userName: 'Elliot',
    photo: 'https://i2.wp.com/itc.ua/wp-content/uploads/2017/12/dims-11.jpg?fit=1524%2C1080&quality=100&strip=all&ssl=1',
    message: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.',
    time: function () {
        let date = new Date();

        function checkTime(i: any) {
            return (i < 10) ? i = "0" + i : i
        }

        return `${checkTime(date.getHours())}:${checkTime(date.getMinutes())}`
    },
};

export default PreJunior