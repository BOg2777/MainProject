import React from 'react'

import styles from './styles.module.css'
import { ShoppingBasket } from 'app/App'
import { useContext } from 'react'

function TShirt({ item }) {
	const [shoppingBasket, setShoppingBasket] = useContext(ShoppingBasket)
	function onsubmit(item) {
		setShoppingBasket((pre) => [
			...pre,
			{
				img: [item.img],
				description: [item.description],
				model: [item.model],
				price: [item.price]
			}
		])
		console.log(shoppingBasket)
	}
	return (
		<div className={styles.wrapper}>
			<img src={item.img} className={styles.img} />
			<p className={styles.description}>
				{item.description} <br />
				{item.model}
			</p>
			<p className={styles.btnPrice}>
				<p className={styles.price}>{item.price} ₽</p>
				<button
					className={styles.btn}
					onClick={() => {
						onsubmit(item)
					}}
				>
					В корзину
				</button>
			</p>
		</div>
	)
}

export default TShirt
