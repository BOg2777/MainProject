import React from "react";

import { MaketPage } from "components";

import logo from 'img/Mens-T-shirt/T-shirt_APLH217-1.png'
import logo2 from 'img/Mens-T-shirt/T-shirt_KAWASAKIST-T1026BLUE.png'

import styles from './styles.module.css';

function TShirts() {
    let listProduct_TShirts = [
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
            {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
        ];
        let title = 'Мужские футболки';
        let src = 'Главная-Каталог-Бадминтон-Мужские одежды-Футболки';
    return (
        <MaketPage listProductX={listProduct_TShirts} title={title} src={src}/>
    );
  }
  
  export default TShirts;