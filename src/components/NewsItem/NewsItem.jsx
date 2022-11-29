import React from "react";

import styles from './style.module.css';


function NewsItem({ item }) {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperItem}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.wrapperText}>
            <div className={styles.text}>{item.text}</div>
            <div className={`${styles.text} ${styles.data}`}>{item.data}</div>
          </div>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src={item.img} />
      </div>
    </>
  );
}

export default NewsItem;