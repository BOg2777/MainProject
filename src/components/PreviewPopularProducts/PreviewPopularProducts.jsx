import React, { useState } from "react";

import styles from "components/PreviewPopularProducts/styles.module.css";

import man1 from "img/PreviewPopularProducts/4xrod6i.jpeg";
import man2 from "img/PreviewPopularProducts/c4479e.jpeg";
import man3 from "img/PreviewPopularProducts/13qte6.jpeg";
import man4 from "img/PreviewPopularProducts/9305.jpeg";
import woman1 from "img/PreviewPopularProducts/5w17s.jpeg";
import woman2 from "img/PreviewPopularProducts/a16sj.jpeg";
import woman3 from "img/PreviewPopularProducts/bcf29.jpeg";
import woman4 from "img/PreviewPopularProducts/mk5e.jpeg";
import accessory5 from "img/PreviewPopularProducts/0e8f1e.jpeg";
import accessory6 from "img/PreviewPopularProducts/7mtqxhr.jpeg";
import accessory7 from "img/PreviewPopularProducts/lb1n8f.jpeg";
import accessory8 from "img/PreviewPopularProducts/qvc1jrf0y.jpeg";

const POPULAR_PRODUCTS = [
  { img: woman1, model: "Женское поло KAWASAKI ST-Q2301 WHITE ", price: "1 900 ₽" , category: 'women'},
  { img: woman2, model: "Женская футболка KAWASAKI ST-T2013 BLACK", price: "1 900 ₽" , category: 'women'},
  { img: woman3, model: "Поло женское LI-NING APLH094-2 YELLOW",price: "900 ₽" , category: 'women'},
  { img: woman4, model: "Женская футболка KAWASAKI ST-V2902 BLUE", price: "1 800 ₽" , category: 'women'},
  { img: man1, model: "Шорты мужские LI-NING AAPS045-2", price: "2 400 ₽" , category: 'men' },
  { img: man2, model: "Поло мужское LNCL097-5 LI-NING PINK BLUE", price: "2 400 ₽" , category: 'men'},
  { img: man3, model: "Cпортивный костюм LI-NING AWES001-1", price: "10 500 ₽" , category: 'men'},
  { img: man4, model: "Форма LI-NING для бадминтона AATP043-3", price: "3 700 ₽" , category: 'men'},
  { img: accessory5, model: "Шарф труба (BUFF) TAAN TD 8106 DOLPHIN", price: "800 ₽", category: 'accessories' },
  { img: accessory6, model: "Резинки на голову TAAN TD 8102 PINK ORANGE", price: "500 ₽" , category: 'accessories'},
  { img: accessory7, model: "Напульсник TAAN HJ 1302 BABY PINK", price: "300 ₽" , category: 'accessories'},
  { img: accessory8, model: "Спортивная бутылка для жидкости TAAN PG 8053 700ml", price: "750 ₽" , category: 'accessories'}
];

function DisplayItems({ Product }) {
  return (
    <div className={styles.productsNew}>
      <img src={Product.img} className={styles.image} alt={Product.category} />
      <p className={styles.model}>{Product.model}</p>
      <p className={styles.price}>{Product.price}</p>
    </div>
  );
}

function PreviewPopularProducts() {
  const [category, setCategory] = useState({ category: "women" });

  return (
    <div className={styles.previewPopularProducts}>
      <div className={styles.popularProducts}>
        <span className={styles.headline}>Новые поступления</span>
        <div className={styles.btn}>
          <button className={styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.filters}>
        <button className={styles.filterButton} onClick={() => setCategory({ category: "men" })}> Для мужчин </button>
        <button autoFocus className={styles.filterButton} onClick={() => setCategory({ category: "women" })}> Для женщин </button>
        <button className={styles.filterButton} onClick={() => setCategory({ category: "accessories" })}> Аксессуары </button>
      </div>

      <div className={styles.products}>
      {POPULAR_PRODUCTS
        .filter(item => category.category === item.category)
        .map(item =>
          {return <DisplayItems Product={item}/>})}
      </div>
    </div>
  );
}

export default PreviewPopularProducts;
