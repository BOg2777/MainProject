import React from "react";

import styles from './styles.module.css';
import TShirt from "../../../../components/T-shirt/T-shirt"
import logo from '../../../../img/Mens-T-shirt/T-shirt_APLH217-1.png'
import logo2 from '../../../../img/Mens-T-shirt/T-shirt_KAWASAKIST-T1026BLUE.png'

function TShirts() {
    console.log(logo);
    let listPoructT_shirts = [
        {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
        {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'}];

    return (
        <div className={styles.wrapper}>
            {listPoructT_shirts.map((item) => {
                return <TShirt item={item} />
            })}
        </div>
    );
  }
  
  export default TShirts;