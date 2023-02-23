import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

import Box from 'assets/img/PersonalArea/Box.png'
import LinkImg from 'assets/img/PersonalArea/Link-chain.png'
import Truc from 'assets/img/PersonalArea/Truck.png'
import User from 'assets/img/PersonalArea/User.png'
import { useState } from 'react'
import { ShoppingBasket } from 'app/App'
import { useContext } from 'react'

function Truck() {
	const [shoppingBasket, setShoppingBasket] = useContext(ShoppingBasket)
	return (
		<div className={styles.personalArea}>
			<div className={styles.navBarWrapper}>
				<div className={styles.navBar}>
					<Link to='/personalArea'>
						<div className={styles.selection}>
							<div className={styles.img}>
								<img src={User} alt='User' />
							</div>
							<div className={styles.text}>Профиль</div>
						</div>
					</Link>
					<Link to='/personalArea/orders'>
						<div className={styles.selectionActive}>
							<div className={styles.img}>
								<img src={Box} alt='Box' />
							</div>
							<div className={styles.text}>Заказы</div>
						</div>
					</Link>
					<Link to='/personalArea/link'>
						<div className={styles.selection}>
							<div className={styles.img}>
								<img src={LinkImg} alt='Link' />
							</div>
							<div className={styles.text}>Подписка</div>
						</div>
					</Link>
					<Link to='/personalArea/truck'>
						<div className={styles.selection}>
							<div className={styles.img}>
								<img src={Truc} alt='Truck' />
							</div>
							<div className={styles.text}>Профиль доставки</div>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.profile}>
				<div className={styles.header}>
					<div className={styles.header_title}>Корзина</div>
					<div>
						{shoppingBasket.map((item) => {
							return (
								<div className={styles.wrapper}>
									<img src={item.img} className={styles.img} />
									<p className={styles.description}>
										{item.description} <br />
										{item.model}
									</p>
									<p className={styles.btnPrice}>
										<p className={styles.price}>{item.price} ₽</p>
										<p> Колличество:</p>
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Truck
