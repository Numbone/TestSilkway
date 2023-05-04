import React from 'react'
import cls from "./styles.module.scss"
import { useNavigate } from 'react-router-dom'
const TitleAndUploadProductButton = ({title}) => {
    const navigate =useNavigate()
  return (
    <div className={cls.wrapper}>
        <div className={cls.text}>{title}</div>
        <button className={cls.button} onClick={()=>navigate("/upload")}>Добавить товар</button>
    </div>
  )
}

export default TitleAndUploadProductButton