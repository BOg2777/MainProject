import React from "react";

import styles from "./styles.module.css";

import { SportCategory } from "components";

const SPORT_CATEGORY = [
  { title: "Бадминтон", className: "badminton" },
  { title: "Теннис", className: "tennis" },
  { title: "Фитнес", className: "fitness" },
  { title: "Плавание", className: "swimming" },
  { title: "Скандинавская ходьба", className: "nordicWalking" },
  { title: "Медицина", className: "medicine" },
];

function NavToCategories() {
  return (
    <div className={styles.categoriesNav}>
      <div className={styles.descriptionWrapper}>
        <h6 className={styles.headline}>Товары для бадминтона</h6>
        <p className={styles.description}>
          В LI-NING Сenter представлен исключительно оригинальный и <br />
          качественный товар, который мы заранее отсортировали по <br />
          категориям для удобства поиска.
        </p>
      </div>

      <div className={styles.navCards}>
        {SPORT_CATEGORY.map((item) => {
          return (
            <SportCategory title={item.title} className={item.className} />
          );
        })}
      </div>
    </div>
  );
}

export default NavToCategories;
