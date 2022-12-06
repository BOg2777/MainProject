import React from "react";

import { ProductItem } from "components";

import styles from './styles.module.css';

function MaketPage() {
    //Написать вместо X название элементов(Продукта)
    let listProductX = [
        // {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
        // {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'}
    ];

    return (
        <div className={styles.wrapper}>
            {listProductX.map((item) => {
                return <ProductItem item={item} />
            })}
        </div>
    );
  }
  
  export default MaketPage;