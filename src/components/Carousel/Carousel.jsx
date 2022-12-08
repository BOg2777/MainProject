import React from "react"

import styles from "components/Carousel/styles.module.css";

import { ReactComponent as Arrow } from "img/Carousel/Arrow-up-right.svg"

const SUBCATEGORIES = [
  { category: "одежда для мужчин", quantity: "45 товаров", style: "man" },
  { category: "одежда для женщин", quantity: "45 товаров", style: "woman" },
  { category: "ракетки", quantity: "45 товаров", style: "rackets" },
  { category: "воланы", quantity: "45 товаров", style: "shuttlecock" },
  { category: "кроссовки", quantity: "45 товаров", style: "trainers" },
  { category: "натяжка ракеток",quantity: "45 товаров", style: "stretchingRackets"},
  { category: "станки для натяжки",quantity: "45 товаров",style: "stringsForStretching" },
  { category: "струны", quantity: "45 товаров", style: "strings" },
  { category: "сетки", quantity: "45 товаров", style: "netting" },
  { category: "теннис", quantity: "45 товаров", style: "tennis" },
  { category: "пушки для бадминтона", quantity: "45 товаров", style: "badminton" },
  { category: "обмотки", quantity: "45 товаров", style: "windings" },
  { category: "корты", quantity: "45 товаров", style: "courts" },
  { category: "сумки", quantity: "45 товаров", style: "bags" },
  { category: "аксессуары", quantity: "45 товаров", style: "accessories" },
  { category: "фитнес", quantity: "45 товаров", style: "fitness" },
  { category: "медицина", quantity: "45 товаров", style: "medicine" },
  { category: "скандинавская ходьба",quantity: "45 товаров",style: "nordicWalking"},
  { category: "плавание", quantity: "45 товаров", style: "swimming" },
  { category: "подарочные карты", quantity: "45 товаров", style: "giftCards" },
];

function Categories({ category }) {
  return (
    <li className={styles[category.style]}>
      <span className={styles.subcategory}>
        {category.category} <Arrow className={styles.arrow}/>
      </span>
      <span className={styles.quantity}>{category.quantity}</span>
    </li>
  );
}

function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <span className={styles.headline}>Категории</span>
        <button className={styles.button}>Смотреть каталог</button>
      </div>
      <div className={styles.scroll}>
        <ul className={styles.listOfcategories}>
          {SUBCATEGORIES.map((category) => {
            return <Categories category={category}/>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Carousel;
