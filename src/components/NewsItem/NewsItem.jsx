import React from "react";

import styles from './style.module.css';


function NewsItem({ item }) {
  return (
    <div className={styles.wrapperItem}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.wrapperText}>
          <div className={styles.text}>{item.text}</div>
          <div className={`${styles.text , styles.date}`}>{item.date}</div>
        </div>
    </div>
  );
}

export default NewsItem;