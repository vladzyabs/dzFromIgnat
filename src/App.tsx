import React from 'react';
import './App.css';
import MyName from "./components/myName/MyName"
import Message from "./components/message/Message"


function App() {
  return (
    <div className='App'>

      <MyName surname={fullName.surname}
              name={fullName.name}
              patronymic={fullName.patronymic}/>
      

      <Message userName={messageDate.userName} 
               userPhoto={messageDate.photo} 
               message={messageDate.message} 
               time={messageDate.time()}/>
      
    </div>
  );
}

export default App;

//date

const fullName = {
  surname: 'Zyabsky',
  name: 'Vladislav',
  patronymic: 'Ivanovich',
}

let messageDate = {
  id: 1,
  userName: 'Elliot',
  photo: 'https://i2.wp.com/itc.ua/wp-content/uploads/2017/12/dims-11.jpg?fit=1524%2C1080&quality=100&strip=all&ssl=1',
  message: 'A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.',
  time: function () {
    let date = new Date()
    function checkTime(i: any) {
      return (i < 10) ? i = "0" + i : i
    }
    return `${checkTime(date.getHours())}:${checkTime(date.getMinutes())}`
  },
}
