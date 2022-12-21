import React from "react";

import styles from "./styles.module.css";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.headline}>Контактная информация</h1>
      <div className={styles.wrapper}>
        <div className={styles.contactsInfo}>
          <h3 className={styles.shop}>Розничный магазин "LINING.CENTER"</h3>
          <h6 className={styles.info}>Адрес</h6>
          <span className={styles.contact}>
            г. Москва, пр-т Буденного, д. 53, к. 2, ТЦ "Буденовский", пав. К-5
          </span>
          <h6 className={styles.info}>Время работы</h6>
          <span className={styles.contact}>
            Пн-сб с 10.00 до 20.00 <br />
            Вс с 10.00 до 19.00
          </span>
          <h6 className={styles.info}>Контакты</h6>
          <span className={styles.contact}>
            E-mail: <span className={styles.green}>info@lining.center</span>
            <br />
            Телефон: +7 (495) 979-61-31
          </span>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://maps.google.com/maps?q=%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D0%BF%D1%80-%D1%82%20%D0%91%D1%83%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE,%20%D0%B4.%2053,%20%D0%BA.%202,%20%D0%A2%D0%A6%20%22%D0%91%D1%83%D0%B4%D0%B5%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%22,%20%D0%BF%D0%B0%D0%B2.%20%D0%9A-5&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
