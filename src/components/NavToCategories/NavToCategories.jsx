import React, { useState } from 'react';

import styles from 'components/NavToCategories/styles.module.css';

function NavToCategories() {

  const [isActive, setActive] = useState({});
  
  const switchOff = () => {
    return setActive({})
    } 

  return (
    <div className={styles.categoriesNav}>
      <div className={styles.descriptionWrapper}>
        <h6 className={styles.headline}>Товары для бадминтона</h6>
        <p className={styles.description}>
          В LI-NING Сenter представлен исключительно оригинальный и <br/> 
          качественный товар, который мы заранее отсортировали по <br/>
          категориям для удобства поиска.
        </p>
      </div>

    <div className={styles.navCards}>

      <div  className={styles.badminton} onMouseOver={ () => setActive({badminton : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}> Бадминтон </span>
          <button className={isActive.badminton ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.tennis} onMouseOver={ ()=> setActive({tennis : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}>Теннис</span>
          <button className={isActive.tennis ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.fitness} onMouseOver={ ()=> setActive({fitness : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}>Фитнес</span>
          <button  className={isActive.fitness ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.swimming} onMouseOver={ ()=> setActive({swimming : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}>Плавание</span>
          <button className={isActive.swimming ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.nordicWalking} onMouseOver={ ()=> setActive({nordicWalking : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}>Скандинавская ходьба</span>
          <button className={isActive.nordicWalking ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

      <div className={styles.medicine} onMouseOver={ ()=> setActive({medicine : true})} onMouseOut={switchOff}>
        <div className={styles.categories}>
          <span className={styles.category}>Медицина</span>
          <button  className={isActive.medicine ? styles.btn : styles.button}>Смотреть каталог</button>
        </div>
      </div>

    </div>

    </div>
  );
}

export default NavToCategories;