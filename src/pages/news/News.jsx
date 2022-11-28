import React from "react";

import style from './style.module.css';
import NewsItem from "../../components/NewsItem/NewsItem";


function News() {

    let newsList = [
        {title: 'Ночная лига. Играй в бадминтон ночью!' , text: 'Любительская ассоциация бадминтона (ЛАБ) совместно с магазином бадминтонной экипировки запустили серию турниров "Ночная лига".' , data: '05.07.2022'},
        {title: 'Ракетки и экипировка KAWASAKI теперь представлены в Линин-центр' , text: 'Мотоциклы, детали для Boeing и Embaer, промышленные роботы и … ракетки для бадминтона. Казалось бы, что может объединить эти вещи. Технологии!' , data: '04.07.2022'},
        {title: 'Ракетки и экипировка KAWASAKI теперь представлены в Линин-центр' , text: 'Мотоциклы, детали для Boeing и Embaer, промышленные роботы и … ракетки для бадминтона. Казалось бы, что может объединить эти вещи. Технологии!' , data: '04.07.2022'}];

    return (
        <div>
            <div className={style.title}>Новости</div>
            <div className={style.filter}>
                <input className={style.input} type="text" placeholder="Поиск" />
                <a className={style.filterCategory}>Сортировать по: Последние добавленные</a>
            </div>
            <div className={style.listitems}>
            {newsList.map((item) => {
                return <NewsItem item={item} />
            })}
            </div>
        </div>
    );
  }
  
  export default News;