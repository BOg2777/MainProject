import React from "react";

import styles from './styles.module.css';





function TShirt({ item }) {
  return (
    <div className={styles.wrapper}>
      <img src={item.img} className={styles.img} />
      <p className={styles.description}>{item.description} <br/>{item.model}</p>
      <p className={styles.price}>{item.price} ₽</p>
    </div>
  );
}

export default TShirt;