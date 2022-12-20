import React from "react";

import icon from "assets/img/News/Ellipse.svg";

import styles from "pages/news/style.module.css";

import { NewsItem } from "components";
import { newsList } from 'pages/news/NewsData'

function News() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentPath}>
        <span className={styles.previousPathText}>Главная</span>
        <img src={icon} alt="ellipse" className={styles.icon} />
        <span className={styles.currentPathText}>Новости</span>
      </div>
      <div className={styles.title}>
        Новости
        <div className={styles.newsAmount}>({newsList.length})</div>
      </div>
      <div className={styles.filter}>
        <input className={styles.input} type="text" placeholder="Поиск" />
        <p className={styles.filterCategory}>
          Сортировать по: Последние добавленные
        </p>
      </div>
      <div className={styles.listItems}>
        {newsList.map((item) => {
          return <NewsItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default News;
