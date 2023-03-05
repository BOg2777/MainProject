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
	function Delete(id) {
		setShoppingBasket(
			shoppingBasket.filter((item, id1) => {
				if (id1 !== id) {
					return true
				}
			})
		)
	}
	const [register, setRegister] = useState({
		0: '1',
		1: '1',
		2: '1',
		3: '1',
		4: '1',
		5: '1',
		6: '1',
		7: '1',
		8: '1',
		9: '1',
		10: '1',
		11: '1',
		12: '1',
		13: '1',
		14: '1',
		15: '1',
		16: '1',
		17: '1',
		18: '1',
		19: '1',
		20: '1'
	})
	function changeInputRegister(event) {
		if (event.target.value >= 0) {
			setRegister((prev) => {
				return {
					...prev,
					[event.target.name]: event.target.value
				}
			})
		}
	}
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
						{shoppingBasket.map((item, id) => {
							return (
								<div>
									<div className={styles.wrapper}>
										<div className={styles.imgWrapper}>
											<img src={item.img} className={styles.img1} />
										</div>
										<p className={styles.description}>
											{item.description} {item.model}
										</p>
										<p className={styles.btnPrice}>
											<p className={styles.price}>{item.price} ₽</p>
											<div className={styles.count}>
												{' '}
												<p className={styles.TextInput}>Колличество:</p>
												<input
													name={String(id)}
													type='number'
													className={styles.countNumber}
													placeholder='1'
													onChange={(event) => changeInputRegister(event)}
													value={register[id]}
												></input>
											</div>
											<div className={styles.wight}>
												<select>
													<option>M</option>
													<option>L</option>
													<option>S</option>
													<option>XL</option>
													<option>XS</option>
												</select>
											</div>
											<p className={styles.price}>
												Итого : {Number(item.price) * register[id]} ₽
											</p>
										</p>
										<div className={styles.wrapperDelete}>
											<div
												className={styles.delete}
												onClick={() => {
													Delete(id)
												}}
											>
												Удалить
											</div>
										</div>
									</div>
									<div className={styles.line}></div>
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
