import React from "react";

import icon from "assets/img/News/Ellipse.svg";
import leftArrow from "assets/img/News/left.svg";
import rightArrow from "assets/img/News/right.svg";

import { useLocation, Link } from "react-router-dom";

import styles from "pages/SingleNewsPage/style.module.css";

import { newsList } from "pages/news/NewsData";
import { NewsItem } from "components";

function SingleNewsPage() {
  const location = useLocation();
  // console.log(newsList[1]);

  return (
    <div>
      {newsList.map((item) => {
        console.log(item);
        {
          if (location.pathname == `/News/${item.id}`) {
            return (
              <div className={styles.wrapper}>
                <div className={styles.currentPath}>
                  {/* гиперсылка на главную страницу */}
                  <span className={styles.previousPathText}>Главная</span>
                  <img src={icon} alt="ellipse" className={styles.icon} />
                  <Link to="/News" className={styles.previousPathText}>
                    Новости
                  </Link>
                  <img src={icon} alt="ellipse" className={styles.icon} />
                  <span className={styles.currentPathText}>{item.title}</span>
                </div>
                <div className={styles.mainTitle}>{item.title}</div>
                <div className={styles.billbordImg}>
                  <img src={item.img} alt="billboard" />
                </div>
                <div className={styles.infoWrapper}>
                  <div className={styles.infoBox}>
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.description}>{item.description}</div>
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
                    <NewsItem item={item} />
                  </div>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default SingleNewsPage;
