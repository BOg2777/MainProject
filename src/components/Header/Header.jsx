import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

import styles from './styles.module.css';

import logo from '../../img/Header/Logo.svg'
import search from '../../img/Header/Search.svg'
import {ReactComponent as Menu} from '../../img/Header/Filter.svg'
import {ReactComponent as Favourite} from '../../img/Header/Favourite.svg'
import {ReactComponent as User} from '../../img/Header/User.svg'
import {ReactComponent as ShoppingBag} from '../../img/Header/ShoppingBag.svg'
import NavBar from "../NavBar/NavBar"

function Header() {

  const [nav, setNav] = useState(false);
  
  return (
    <>
      <header className={styles.header}>
          <nav className={styles.appNavigation}>
            <ul className={styles.nav}> 
                <li className={styles.navList} onClick={() => setNav(!nav)}>
                <Menu className={styles.menu}/>Каталог</li>
                <Link to="/Stock" className={styles.navList}>Акции</Link>
                <Link to="/News" className={styles.navList}>Новости</Link>
            </ul>
            <Link to="/Main" className={styles.logo}><img src={logo} ></img></Link> 
            <ul className={styles.userBar}>
                <li className={styles.headerSearch}> <img src={search} alt="search"/> <input type="text" placeholder="Поиск" className={styles.search}/></li>
                <li className={styles.favourites}><Favourite className={styles.favourite}/> </li>
                <li className={styles.user}><User className={styles.userImg}/></li>
                <li className={styles.shoppingBag}><ShoppingBag className={styles.shoppingBagImg}/></li>
          </ul>
        </nav>
      </header>
      {nav ? <NavBar/> : ""}
    </> 
  );
}

export default Header;
