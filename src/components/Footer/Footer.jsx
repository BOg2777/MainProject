import React from "react";

import logo from "img/Header/Logo.svg";
import facebook from "img/Footer/facebook.svg";
import twitter from "img/Footer/twitter.svg";
import instagram from "img/Footer/inst.svg";
import vk from "img/Footer/vk.svg";
import arrow from "img/Footer/arrow.svg";
import applePay from "img/Footer/apple.svg";
import googlePay from "img/Footer/google.svg";
import visa from "img/Footer/visa.svg";
import mastercard from "img/Footer/Master.svg";
import mir from "img/Footer/Mir.svg";
import belcard from "img/Footer/Belcart.svg";

import styles from "components/Footer/styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.contacts}>
          <h4 className={styles.columnName}>
            <img src={logo} className={styles.logo} alt="logo"></img>
          </h4>
          <ul className={styles.contactsList}>
            <li className={styles.contactsInfo}> МСК: +7 (495) 979-61-31</li>
            <li className={styles.contactsInfo}> info@lining.center</li>
            <li className={styles.contactsInfo}> г. Москва, пр-т Буденного, д. 53, к. 2</li>
          </ul>
          <ul className={styles.termsAndConditions}>
            <li> Политика конфиденциальности</li>
            <li> Условия пользования</li>
          </ul>
        </div>

        <div className={styles.navigation}>
          <h4 className={styles.columnName}>Навигация</h4>
          <ul className={styles.navigationList}>
            <li>Каталог</li>
            <li>Новости</li>
            <li>Акции</li>
          </ul>
        </div>

        <div className={styles.information}>
          <h4 className={styles.columnName}>Информация</h4>
          <ul className={styles.informationList}>
            <li>Контакты</li>
            <li>Оплата и доставка</li>
            <li>Гарантия возврата</li>
            <li>Вопросы и ответы</li>
          </ul>
        </div>

        <div className={styles.newsFlow}>
          <h4 className={styles.columnNameLast}>Подпишись на рассылку</h4>

          <label className={styles.label}>Email <input type="email" placeholder="Введите ваш email"className={styles.search} /></label>
          <button className={styles.inputBtn}>
            <img src={arrow} alt="arrow" />
          </button>

          <div className={styles.socialNetworks}>
            <img src={instagram} alt="instagram"></img>
            <img src={facebook} alt="facebook"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={vk} alt="vk"></img>
          </div>
        </div>
      </div>

      <div className={styles.underFooter}>
        <span className={styles.copyright}>
          © 2022 Li-ning Center. Все права защищены
        </span>
        <span className={styles.payment}>
          <img src={applePay} alt="applePay" />
          <img src={googlePay} alt="googlePay" />
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={mir} alt="mir" />
          <img src={belcard} alt="belcard" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
