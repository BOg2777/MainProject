import React from "react";

import { TShirt } from "components";

import logo from 'img/Mens-T-shirt/T-shirt_APLH217-1.png'
import logo2 from 'img/Mens-T-shirt/T-shirt_KAWASAKIST-T1026BLUE.png'

import styles from 'pages/catalog/badminton/MensClothing/T-shirts/styles.module.css';

function TShirts() {
    console.log(logo);
    let listProductT_shirts = [
        {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
        {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'}];

    return (
        <div className={styles.wrapper}>
            {listProductT_shirts.map((item) => {
                return <TShirt item={item} />
            })}
        </div>
    );
  }
  
  export default TShirts;