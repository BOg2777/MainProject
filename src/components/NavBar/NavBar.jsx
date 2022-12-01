import React from "react";

import styles from './style.module.css'
import icon2 from '../../img/NavBar/Vector.svg'
import icon from '../../img/NavBar/backNavBar.svg';

function NavBar() {

    return (
        <nav className={styles.navBar}>
            <button className={styles.btn}><img src={icon} />Назад
            </button>
            <ul className={styles.wrapper}>
                <li className={styles.navItem}>Бадминтон<img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Теннис</a><img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Фитнес</a><img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Плавание</a><img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Скандинавская ходьба</a><img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Медицина</a><img src={icon2}/></li>
                <li className={styles.navItem}><a href="#">Подарочные карты</a><img src={icon2}/></li>
            </ul>
        </nav>
    )
};

export default NavBar;