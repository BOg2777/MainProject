import React from "react";

import styles from "components/PreviewNews/styles.module.css";

import news1 from "img/PreviewNews/4d20.jpeg";
import news2 from "img/PreviewNews/dfgdfg.jpeg";
import news3 from "img/PreviewNews/c9f7.jpeg";

function PreviewNews() {
  return (
    <div className={styles.previewNews}>
        
      <div className={styles.headline}>Новости</div>
      <div className={styles.btn}>
      <button className={styles.button}>Смотреть все</button>
      </div>
      <div className={styles.newsWrapper}>
      <div className={styles.news}>
        <h4 className={styles.title}>
          Ночная лига. Играй в бадминтон ночью!
        </h4>
        <img src={news1} className={styles.image} alt="news"/>
        <p className={styles.paragraph}>
          Любительская ассоциация бадминтона (ЛАБ) совместно с магазином
          бадминтонной экипировки запустили серию турниров "Ночная лига".
        </p>
        <span className={styles.date}> 14.09.2022</span>
      </div>

      <div className={styles.news}>
        <h4 className={styles.title}>
        Ракетки и экипировка KAWASAKI теперь представлены в Линин-центр!
        </h4>
        <img src={news2} className={styles.image} alt="news"/>
        <p className={styles.paragraph}>
        Мотоциклы, детали для Boeing и Embaer, промышленные роботы и … ракетки для бадминтона.
         Казалось бы, что может объединить эти вещи. Технологии!
        </p>
        <span className={styles.date}> 22.05.2021</span>
      </div>

      <div className={styles.news}>
        <h4 className={styles.title}>
        Турнир по бадминтону в серии BLACK &#38; WHITE!
        </h4>
        <img src={news3} className={styles.image} alt="news"/>
        <p className={styles.paragraph}>
        18 ноября 2017 года состоится ТУРНИР ПО БАДМИНТОНУ СЕРИИ BLACK &#38; WHITE
        </p>
        <span className={styles.date}> 14.11.2017</span>
      </div>
      </div>
    </div>
  );
}

export default PreviewNews;
