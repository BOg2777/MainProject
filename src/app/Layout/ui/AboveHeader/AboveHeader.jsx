import React from "react";

import whatsapp from "assets/img/Header/Whatsapp.svg";
import telegram from "assets/img/Header/Telegram.svg";

import styles from "./styles.module.css";

function AboveHeader() {
  return (
    <div className={styles.contacts}>
      <div className={styles.emailAndAddress}>
        <span>info@lining.center</span>
        <span> Адрес: г. Москва, пр-т Буденного, д. 53, к. 2</span>
      </div>
      <div className={styles.numberAndMessengers}>
        <span>МСК: +7 (495) 979-61-31</span>
        <span className={styles.whatsapp}><img src={whatsapp} alt="whatsapp"/></span>
        <span className={styles.telegram}><img src={telegram} alt="telegram"/></span>
      </div>
    </div>
  );
}

export default AboveHeader;
