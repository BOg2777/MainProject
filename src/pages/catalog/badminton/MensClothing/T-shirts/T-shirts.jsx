import React from "react";

import { MaketPage } from "./ui";

import img from 'assets/img/Mens-T-shirt/T-shirt_APLH217-1.png'
import img4 from 'assets/img/Mens-T-shirt/T-Shirt_Kawasaki ST-.png'
import img5 from 'assets/img/Mens-T-shirt/T-Shirt_Kawasaki.png'
import img2 from 'assets/img/Mens-T-shirt/T-shirt_KAWASAKIST-T1026BLUE.png'
import img3 from 'assets/img/Mens-T-shirt/T-Shirt_LI-NING-APLH217-5.png'
import img6 from 'assets/img/Mens-T-shirt/T-Shirt_LI-NING APLH217-1.png'
import img7 from 'assets/img/Mens-T-shirt/T-Shirt_LI-NING-APLG049-3.png'
import img8 from 'assets/img/Mens-T-shirt/T-Shirt_LI-NING.png'
import img9 from 'assets/img/Mens-T-shirt/Li-ning 1.png'
import img10 from 'assets/img/Mens-T-shirt/Li-ning.png'


import styles from './styles.module.css';

function TShirts() {
    let listProduct_TShirts = [
            {img: img, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 '},
            {img: img2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 '},
            {img: img3, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 '},
            {img: img4, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '1600 '},
            {img: img5, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1600 '},
            {img: img6, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 '},
            {img: img7, description: 'Поло мужское LI-NING', model: 'APLG049-3', price: '1600 '},
            {img: img8, description: 'Мужская футболка KAWASAKI', model: 'APLG049-3', price: '950 '},
            {img: img9, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 '},
            {img: img10, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 '},
        ];
        let title = 'Мужские футболки';
        let src = ['Главная',
        'Каталог',
        'Бадминтон',
        'Мужская одежда',
        'Футболки'];
    return (
        <MaketPage listProductX={listProduct_TShirts} title={title} src={src}/>
    );
  }
  
  export default TShirts;