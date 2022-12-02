import React from "react";

import { NewsItem } from "components";

import styles from 'pages/news/style.module.css';

function News() {

    let newsList = [
        {title: 'Ночная лига. Играй в бадминтон ночью!' , text: 'Любительская ассоциация бадминтона (ЛАБ) совместно с магазином бадминтонной экипировки запустили серию турниров "Ночная лига".' , date: '05.07.2022'},
        {title: 'Ракетки и экипировка KAWASAKI теперь представлены в Линин-центр' , text: 'Мотоциклы, детали для Boeing и Embaer, промышленные роботы и … ракетки для бадминтона. Казалось бы, что может объединить эти вещи. Технологии!' , date: '04.07.2022'},
        {title: 'Ракетки и экипировка KAWASAKI теперь представлены в Линин-центр' , text: 'Мотоциклы, детали для Boeing и Embaer, промышленные роботы и … ракетки для бадминтона. Казалось бы, что может объединить эти вещи. Технологии!' , date: '04.07.2022'}];

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Новости</div>
            <div className={styles.filter}>
                <input className={styles.input} type="text" placeholder="Поиск" />
                <a className={styles.filterCategory}>Сортировать по: Последние добавленные</a>
            </div>
            <div className={styles.listItems}>
            {newsList.map((item) => {
                return <NewsItem item={item} />
            })}
            </div>
        </div>
    );
  }
  
  export default News;