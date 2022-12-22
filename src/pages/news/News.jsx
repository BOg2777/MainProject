import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import icon from "assets/img/News/Ellipse.svg";

import styles from "./style.module.css";
import { NewsItem } from "./ui";
import { NewsModel } from "./model";

function News() {
  useEffect(() => {
    NewsModel.fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentPath}>
        <span className={styles.previousPathText}>Главная</span>
        <img src={icon} alt="ellipse" className={styles.icon} />
        <span className={styles.currentPathText}>Новости</span>
      </div>
      <div className={styles.title}>
        Новости
        <div className={styles.newsAmount}>({NewsModel.news.length})</div>
      </div>
      <div className={styles.filter}>
        <input className={styles.input} type="text" placeholder="Поиск" />
        <p className={styles.filterCategory}>
          Сортировать по: Последние добавленные
        </p>
      </div>
      <div className={styles.listItems}>
        {NewsModel.news.map((item) => {
          return <NewsItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default observer(News);
