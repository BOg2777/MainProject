import React, { useState } from "react";

import styles from "./styles.module.css";

function SportCategory({ title, className }) {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={styles[className]}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}>
      <div className={styles.categories}>
        <span className={styles.category}> {title} </span>
        <button className={isActive ? styles.btn : styles.button}>
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}

export default SportCategory;
