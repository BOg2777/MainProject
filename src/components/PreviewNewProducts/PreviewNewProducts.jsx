import React, { useState } from "react";

import styles from "components/PreviewNewProducts/styles.module.css";

import Tshirt1 from "img/PreviewNewProducts/tsh9.jpeg";
import Tshirt2 from "img/PreviewNewProducts/tsh2.jpeg";
import Tshirt3 from "img/PreviewNewProducts/tsh3.jpeg";
import Tshirt4 from "img/PreviewNewProducts/tsh4.jpeg";
import Tshirt5 from "img/PreviewNewProducts/tsh5.jpeg";
import Tshirt6 from "img/PreviewNewProducts/tsh6.jpeg";
import Tshirt7 from "img/PreviewNewProducts/tsh8.jpeg";
import Tshirt8 from "img/PreviewNewProducts/7u0k.jpeg";
import accessory1 from "img/PreviewNewProducts/nmfcul715.jpeg";
import accessory2 from "img/PreviewNewProducts/rpankd9.jpeg";
import accessory3 from "img/PreviewNewProducts/shntuplwh5e6.jpeg";
import accessory4 from "img/PreviewNewProducts/pbg8.jpeg";

const NEW_PRODUCTS = [
  { img: Tshirt1, model: "Мужская футболка LI-NING AAYP066-1", price: "2 400 ₽" , category: 'men' },
  { img: Tshirt2, model: "Мужская футболка KAWASAKI ST-T1026 GRAY", price: "1 600 ₽" , category: 'men'},
  { img: Tshirt3, model: "Мужская футболка KAWASAKI ST-T1026 BLUE", price: "1 600 ₽" , category: 'men'},
  { img: Tshirt4, model: "Мужское поло KAWASAKI ST-T1011 RED", price: "1 900 ₽" , category: 'men'},
  { img: Tshirt5, model: "Женская футболка KAWASAKI ST-R2204", price: "1 700 ₽" , category: 'women'},
  { img: Tshirt6, model: "Женская футболка KAWASAKI ST-R4204 YELLOW", price: "1 600 ₽" , category: 'women'},
  { img: Tshirt7, model: "Женская футболка KAWASAKI ST-Q2303 BLUE",price: "1 600 ₽" , category: 'women'},
  { img: Tshirt8, model: "Женская футболка KAWASAKI ST-Q2319", price: "1 900 ₽" , category: 'women'},
  { img: accessory1, model: "Повязка на голову LI-NING AQAR 026 BLUE", price: "500 ₽", category: 'accessories' },
  { img: accessory2, model: "Напульсник LI-NING LQAN 372 PINK", price: "400 ₽" , category: 'accessories'},
  { img: accessory3, model: "Спортивная фляга для жидкости TAAN PG 8056 YELLOW 750ml", price: "1 800 ₽" , category: 'accessories'},
  { img: accessory4, model: "Бампер на ракетку TAAN AC 1506 ORANGE", price: "350 ₽" , category: 'accessories'}
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

function PreviewNewProducts() {
  const [category, setCategory] = useState({ category: "men" });

  const [clicked, setClicked] = useState(true);

  return (
    
    <div className={styles.previewProductsNew}>
      <div className={styles.newProducts}>
        <span className={styles.headline}>Новые поступления</span>
        <div className={styles.btn}>
          <button className={styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.filters}>
      
        <button  className={clicked ? styles.clickedButton : styles.filterButton } onClick={() => setCategory({ category: "men" })}>Для мужчин</button>
        <button className={styles.filterButton} onClick={() => {setCategory({ category: "women" }); setClicked(false)}}>Для женщин</button>
        <button className={styles.filterButton} onClick={() => {setCategory({ category: "accessories" }); setClicked(false)}}> Аксессуары</button>
      </div>

      <div className={styles.products}>
        {NEW_PRODUCTS.filter((item) => category.category === item.category).map(
          (item) => {
            return <DisplayItems Product={item} />;
          }
        )}
      </div>
    </div>
  );
}

export default PreviewNewProducts;

