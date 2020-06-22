import React from "react"

import style from "./MyName.module.scss"

type PropsMyNameType = {
  surname: string,
  name: string,
  patronymic: string,
}

function MyName(props: PropsMyNameType) {
  return (
    <div className={style.MyName}>
      <span>{props.surname}</span>
      <span>{props.name}</span>
      <span>{props.patronymic}</span>
    </div>
  )
}

export default MyName