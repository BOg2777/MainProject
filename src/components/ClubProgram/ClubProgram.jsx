import React from "react";

import styles from "components/ClubProgram/styles.module.css";

import image from "assets/img/Header/10078.jpg";

function ClubProgram() {
  return (
    <div className={styles.clubProgram}>
        <div className={styles.wrapper}>
      <h1 className={styles.headline}>Клубная программа Li-Ning Center</h1>
      <p className={styles.descripcion}>
        Специально для спортивных школ, секций и клубов, занимающихся
        преподаванием игры в бадминтон, Li-Ning Center разработал уникальную
        программу, позволяющую существенно экономить средства и время на покупку
        бадминтонного инвентаря. Просто занимайтесь бадминтоном! Теперь не надо
        ездить за каждой тубой с воланами, за каждой обмоткой. Li-Ning Center
        предлагает полностью оснастить и экипировать ваш клуб. Начните
        сотрудничество с заключения договора на предоставление инвентаря и
        расходных материалов.
      </p>
      <h5 className={styles.advantages}>Особенности программы от Li-Ning Center: </h5>
      <ul className={styles.advantagesList}>
        <li className={styles.list}>Отсрочка платежа от 1 до 3х месяцев.</li>
        <li className={styles.list}>Оптовые цены.</li>
        <li className={styles.list}>Специальные условия для тренеров, инструкторов и организаторов соревнований.</li>
        <li className={styles.list}>Агентское вознаграждение.</li>
        <li className={styles.list}>Экспресс-доставка товара.</li>
        <li className={styles.list}>Наличная и безналичная оплата.</li>
      </ul>
      <span className={styles.contactUs}>Позвоните нам по телефону 
      <span className={styles.green}> +7 495 979 61 31</span> <br/>
Напишите нам по электронной почте  <span className={styles.green}>info@lining.center </span> <br/>
и наши менеджеры с удовольствием расскажут вам о нашей клубной программе.</span>
</div>
<img src={image} className={styles.image}></img> 

    </div>
  );
}

export default ClubProgram;
