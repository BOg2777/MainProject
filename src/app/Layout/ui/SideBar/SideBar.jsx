import React from "react";
import { useState } from "react";

import icon from 'assets/img/NavBar/backNavBar.svg';

import styles from './style.module.css'

import { SideBarData } from "./SideBarData";
import SidebarItem from "../../ui/SideBarItem/SideBarItem"



function Sidebar(){
    const [backActive, setbackActive] = useState('none');
    const backNoActive = () => setbackActive('none');

    return (       
        <nav className={styles.navBar}>
          <button className={styles.btn} style={{display:backActive}} ><img src={icon} />Назад</button>
          <ul >
            { SideBarData.map((item, index) => <SidebarItem  
            backNoActive={backNoActive}
            key={index} 
            item={item}/>) }
          </ul>
        </nav>
    )
}

export default Sidebar;





















































// function SideBar() {
//     const [subCategory, setSubCategory] = useState(false)
//     const [backActive, setbackActive] = useState('');

//     console.log(SideBarData)
    

//     return (
//         <nav className={styles.navBar}>

//             <button className={styles.btn} style={{display:backActive}} ><img src={icon} />Назад</button>

//             <ul className={styles.wrapper}>
//                 {SideBarData.map((item, index) => {
//                     return (
//                         <li key={index} className={item.cName} onClick={() => {setbackActive("flex"); setSubCategory(!subCategory)}}>
//                             <Link to={item.path} >
//                                 <span>{item.title}</span>
//                                 <img src={item.icon}/>
//                             </Link>
//                             { subCategory && item.subcategory ? 
//                                 <ul className={styles.wrapper}>
//                                     {item.subcategory.map((item, index) => {
//                                         return (
//                                             <li key={index} className={item.cName} >
//                                                 <Link to={item.path} >
//                                                     <span>{item.title}</span>
//                                                     <img src={item.icon}/>
//                                                 </Link> 
//                                             </li>
//                                         )
//                                     })}
//                                 </ul> : ''
//                             }
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
//     )
// };

// export default SideBar;