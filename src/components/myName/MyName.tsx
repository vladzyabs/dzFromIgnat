import React from "react"

type PropsMyNameType = {
    surname: string,
    name: string,
    patronymic: string,
  }
  
function MyName(props: PropsMyNameType) {
    return (
      <div className='MyName'>
        <span>{props.surname}</span>
        <span>{props.name}</span>
        <span>{props.patronymic}</span>
      </div>
    )
}

export default MyName