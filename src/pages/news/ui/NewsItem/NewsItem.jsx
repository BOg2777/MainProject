import React from "react";
import { Link } from "react-router-dom";

import styles from './style.module.css';

function NewsItem({ item }) {
  
  return (
    <Link className={styles.wrapperItem} to={`/News/${item.id}`} item={item}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.wrapperText}>
          <div className={styles.text}>{item.text}</div>
          <div className={`${styles.text , styles.date}`}>{item.date}</div>
        </div>
    </Link>
  );
}

export default NewsItem;