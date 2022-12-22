import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import icon from "assets/img/News/Ellipse.svg";
import leftArrow from "assets/img/News/left.svg";
import rightArrow from "assets/img/News/right.svg";

import styles from "./style.module.css";

import { NewsModel } from "./model";

function SingleNewsPage() {
  useEffect(() => {
    NewsModel.fetch();
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.currentPath}>
          {/* гиперсылка на главную страницу */}
          <span className={styles.previousPathText}>Главная</span>
          <img src={icon} alt="ellipse" className={styles.icon} />
          <Link to="/News" className={styles.previousPathText}>
            Новости
          </Link>
          <img src={icon} alt="ellipse" className={styles.icon} />
          <span className={styles.currentPathText}>{NewsModel.title}</span>
        </div>
        <div className={styles.mainTitle}>{NewsModel.title}</div>
        <div className={styles.billbordImg}>
          <img src={NewsModel.img} alt="billboard" />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.infoBox}>
            <div className={styles.date}>{NewsModel.date}</div>
            <div className={styles.description}>{NewsModel.description}</div>
            <div className={styles.btnWrapper}>
              <button className={styles.btn}>
                <div className={styles.btnInfo}>
                  <img src={leftArrow} alt="leftArrow" />
                  <div>Вернуться назад</div>
                </div>
              </button>
              <button className={styles.btn}>
                <div className={styles.btnInfo}>
                  <div>Следующая новость </div>
                  <img src={rightArrow} alt="rightArrow" />
                </div>
              </button>
            </div>
          </div>

          <div>
            <Link
              className={styles.wrapperItem}
              to={`/news/${NewsModel.id}`}
              item={NewsModel}
            >
              <div className={styles.title}>{NewsModel.title}</div>
              <div className={styles.wrapperText}>
                <div className={styles.text}>{NewsModel.text}</div>
                <div className={`${(styles.text, styles.date)}`}>
                  {NewsModel.date}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(SingleNewsPage);
