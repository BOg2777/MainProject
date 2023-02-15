import React from 'react'

import styles from './styles.module.css'

function TShirt({ item }) {
	return (
		<div className={styles.wrapper}>
			<img src={item.img} className={styles.img} />
			<p className={styles.description}>
				{item.description} <br />
				{item.model}
			</p>
			<p className={styles.btnPrice}>
				<p className={styles.price}>{item.price} ₽</p>
				<button className={styles.btn} onClick={() => {}}>
					В корзину
				</button>
			</p>
		</div>
	)
}

export default TShirt
