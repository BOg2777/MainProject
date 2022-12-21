import React from "react";

import { Link } from 'react-router-dom'

import logo from "assets/img/Header/Logo.svg";
import facebook from "assets/img/Footer/facebook.svg";
import twitter from "assets/img/Footer/twitter.svg";
import instagram from "assets/img/Footer/inst.svg";
import vk from "assets/img/Footer/vk.svg";
import applePay from "assets/img/Footer/apple.svg";
import googlePay from "assets/img/Footer/google.svg";
import visa from "assets/img/Footer/visa.svg";
import mastercard from "assets/img/Footer/Master.svg";
import mir from "assets/img/Footer/Mir.svg";
import belcard from "assets/img/Footer/Belcart.svg";

import styles from "./styles.module.css";

import {ReactComponent as Arrow} from "assets/img/Footer/arrow.svg";

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
          <Link to="/terms+conditions" style={{ textDecoration: 'inherit', color:'inherit' }}> Политика конфиденциальности</Link>
            <Link to="/policies" style={{ textDecoration: 'inherit', color:'inherit' }}> Условия пользования</Link>
          </ul>
        </div>

        <div className={styles.navigation}>
          <h4 className={styles.columnName}>Навигация</h4>
          <ul className={styles.navigationList}>
            <li>Каталог</li>
            <Link to="/news" style={{ textDecoration: 'inherit', color:'inherit' }}>Новости</Link>
            <li>Акции</li>
          </ul>
        </div>

        <div className={styles.information}>
          <h4 className={styles.columnName}>Информация</h4>
          <ul className={styles.informationList}>
          <Link to="/contacts" style={{ textDecoration: 'inherit', color:'inherit' }}>Контакты</Link>
            <li>Оплата и доставка</li>
            <Link to="/returns+refunds" style={{ textDecoration: 'inherit', color:'inherit' }}>Гарантия возврата</Link>
            <Link to="/faq" style={{ textDecoration: 'inherit', color:'inherit' }}>Вопросы и ответы</Link>
          </ul>
        </div>

        <div className={styles.newsFlow}>
          <h4 className={styles.columnNameLast}>Подпишись на рассылку</h4>

          <label className={styles.label}>Email <input type="email" placeholder="Введите ваш email"className={styles.search} /></label>
          <button className={styles.inputBtn}> <Arrow/></button>

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
          © 2022 Li-ning Center. Все права защищены.
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
