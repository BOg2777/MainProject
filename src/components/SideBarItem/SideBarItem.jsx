import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import styles from 'components/SideBarItem/style.module.css'

function SidebarItem({item, index,}){
    const [open, setOpen] = useState(false)
    
    if(item.subcategory){
        return (
                <li className={styles.wrapper}>
                    <li className={item.cName}>
                        <Link key={index} to={item.path} onClick={() => setOpen(!open)}>
                            <span>{item.title}</span>
                            <img src={item.icon}/>
                        </Link>
                    </li>
                    <li className={open? styles.subItem : styles.subItemBlock}>
                        { item.subcategory.map((child, index) => <SidebarItem key={index} item={child} />) }
                    </li>  
                </li>
                )       
    }else{
        return (
                <li className={item.cName}>
                    <Link key={index} to={item.path}>
                        <span>{item.title}</span>
                        <img src={item.icon}/>
                    </Link> 
                </li>
        )
    }
}

export default SidebarItem;