import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import styles from 'components/NewsItem/style.module.css';


function NewsItem({ item }) {
  const [showSingleNews, setShowSingleNews] = useState(false);
  
  return (
    //при совпадении id отрисовывать

    <Link className={styles.wrapperItem} to='/News/id'>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.wrapperText}>
          <div className={styles.text}>{item.text}</div>
          <div className={`${styles.text , styles.date}`}>{item.date}</div>
        </div>
    </Link>
  );
}

export default NewsItem;