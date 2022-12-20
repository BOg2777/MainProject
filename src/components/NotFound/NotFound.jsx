import React from "react";
import { useNavigate } from 'react-router-dom'

import styles from "components/NotFound/styles.module.css";

import logo from 'assets/img/Header/LogoBl.svg'
import shuttlecock from 'assets/img/Header/Polygon.jpg'



function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
         <img src={logo} className={styles.logo} alt="logo"></img> 
         <div className={styles.wrapper}>
         <h1 className={styles.error}>Ошибка 404</h1>
         <span className={styles.oops}>Упс... Кажется, что-то пошло не так. Попробуйте обновить страницу или вернуться назад </span>
         <button className={styles.button} onClick={()=> navigate(-1)}>Вернуться назад</button>
         <img src={shuttlecock} className={styles.shuttlecock} alt="shuttlecock"></img> 
         </div>
    </div>
  );
}

export default NotFound;
