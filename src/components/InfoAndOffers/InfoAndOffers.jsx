import React from "react";
import { useNavigate } from 'react-router-dom'

import styles from 'components/InfoAndOffers/styles.module.css';

import userIcon from "img/Header/UserIcon.svg";
import thunder from "img/Header/Thunder.svg";


function InfoAndOffers({setRegistration}) {

  const navigate = useNavigate();

  const navigateToClubProgram = () => {
    navigate('/clubProgram');
  };

  return (
    <div className={styles.information}>

      <div className={styles.infoAboutShop}>
        <div className={styles.info}>
          <h1 className={styles.headline}>LI-NING Сenter</h1>
          <div className={styles.line}></div>
          <p className={styles.description}>
            Cпециализированный магазин по продаже профессионального спортивного
            инвентаря, аксессуаров, одежды и обуви для бадминтона. Мы являемся
            крупнейшим представителем премиальных китайских спортивных брендов
            для бадминтона Li-Ning, KASON в России.
          </p>
        </div>
        <button className={styles.button}>Смотреть каталог</button>
      </div>

      <div className={styles.benefits}>
        <img src={userIcon} className={styles.userIcon} alt="userIcon"></img>
        <div className={styles.benefitsInfo}>
        <h3 className={styles.headlineBenefits}>
          Пользуйтесь всеми <br/>преимуществами!
        </h3>
        <p className={styles.descriptionBenefits}>
          Зарегистрируйтесь в нашем интернет-магазине и пользуйтесь всеми
          преимуществами, акциями и специальными предложениями для Вас!
        </p>
        <button className={styles.buttonBenefits} onClick={()=>setRegistration(true)}>Зарегистрироваться</button>
      </div>
      </div>

      <div className={styles.clubProgram}>
        <img src={thunder} className={styles.thunder} alt="thunder"></img>
        <div className={styles.clubProgramInfo}>
        <h3 className={styles.headlineClubProgram}>
           Клубная программа Li-Ning Center
        </h3>
        <p className={styles.descriptionClubProgram}>
        Специально для спортивных школ, секций и клубов, занимающихся преподаванием игры в бадминтон, 
        Li-Ning Center разработал уникальную программу, позволяющую существенно экономить средства и 
        время на покупку бадминтонного инвентаря. 
        </p>
        <button className={styles.buttonClubProgram} onClick={navigateToClubProgram}>Подробнее</button>
      </div>
      </div>

    </div>
  );
}

export default InfoAndOffers;
