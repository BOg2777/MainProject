import React from "react";

import style from './style.module.css';


function NewsItem({ item }) {
  return (
    <div className={style.wrapperItem}>
        <div className={style.title}>{item.title}</div>
        <div className={style.wrapperText}>
          <div className={style.text}>{item.text}</div>
          <div className={style.text, style.data}>{item.data}</div>
        </div>
    </div>
  );
}

export default NewsItem;