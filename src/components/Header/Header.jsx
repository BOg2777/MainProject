import React from "react";
import { useState } from 'react';

import styles from './styles.module.css';

import logo from '../../img/Header/Logo.svg'
import search from '../../img/Header/Search.svg'
import {ReactComponent as Menu} from '../../img/Header/Filter.svg'
import {ReactComponent as Favourite} from '../../img/Header/Favourite.svg'
import {ReactComponent as User} from '../../img/Header/User.svg'
import {ReactComponent as ShoppingBag} from '../../img/Header/ShoppingBag.svg'
import Registration from "../Registration/Registration";



function Header() {
  const [registration, setRegistration] = useState(false);
  return (
  <header className={styles.header}>
      <nav className={styles.appNavigation}>
        <ul className={styles.nav}> 
            <li className={styles.navList}> <Menu className={styles.menu}/> Каталог</li>
            <li className={styles.navList}>Акции</li>
            <li className={styles.navList}>Новости</li>
        </ul>
      <img src={logo} className={styles.logo}></img> 
        <ul className={styles.userBar}>
            <li className={styles.headerSearch}> <img src={search} alt="search"/> <input type="text" placeholder="Поиск" className={styles.search}/></li>
            <li className={styles.favourites}><Favourite className={styles.favourite}/> </li>
            <li className={styles.user}><User className={styles.userImg} onClick={()=>setRegistration(!registration)}/></li>
            <li className={styles.shoppingBag}><ShoppingBag className={styles.shoppingBagImg}/></li>
        </ul>
      </nav>
      <Registration registration={registration} />
  </header>

  );
}

export default Header;
