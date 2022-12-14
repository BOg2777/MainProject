import React from "react";

import { ProductItem, Paginat } from "components";

import logo from 'img/Mens-T-shirt/Ellipse 36.png'

import styles from './styles.module.css';

function MaketPage({listProductX, title, src}) {
    // Написать вместо X название элементов(Продукта) и заполнить массив
    // let listProductX = [
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    //     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
    // ];
    // название страницы
    // let title = 'Мужские футболки';
    // Путь страницы
    // let src = 'Главная-Каталог-Бадминтон-Мужские одежды-Футболки';

    return (
        <div>
            <div className={styles.wrapperSrc}>
                    {src.map((item, id)=>{
                        if(id != src.length -1){
                            return <div className={styles.src}>{item} <img className={styles.srcImg} src={logo} /></div>
                        }else{
                            return <div className={styles.src}>{item}</div>
                        }
                    })}
            </div>
            <div className={styles.wrapperSearch}>
                <div className={styles.title}>{title}</div>
                <div className={styles.filter}>
                    <input className={styles.input} type="text" placeholder="Поиск" />
                    <a className={styles.filterCategory}>Сортировать по: Последние добавленные</a>
                    <a className={styles.filterbtn}>Фильтрация</a>
                </div>
            </div>
            <div className={styles.wrapperItems}>
                {listProductX.map((item) => {
                    return <ProductItem item={item} />
                })}
            </div>
            <Paginat/>
        </div>
    );
  }
  
  export default MaketPage;
