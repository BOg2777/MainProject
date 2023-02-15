import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import styles from './styles.module.css'

import Box from 'assets/img/PersonalArea/Box.png'
import LinkImg from 'assets/img/PersonalArea/Link-chain.png'
import Truck from 'assets/img/PersonalArea/Truck.png'
import User from 'assets/img/PersonalArea/User.png'

import { Store } from 'app/App'
function PersonalArea() {
	const [store, setStore] = useContext(Store)
	const [register, setRegister] = useState({
		Name: '',
		Surname: '',
		PasswordRepeat: ''
	})
	function changeInputRegister(event) {
		setRegister((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	const submitChackin = () => {
		// setStore((pre) => ({
		// 	...pre,
		// 	user: [
		// 		...pre,
		// 		{
		// 			username: register.Name,
		// 			Surname: register.Surname
		// 		}
		// 	]
		// }))
		console.log(store)
	}
	return (
		<div className={styles.personalArea}>
			<div className={styles.navBarWrapper}>
				<div className={styles.navBar}>
					<Link to='/personalArea'>
						<div className={styles.selectionActive}>
							<div className={styles.img}>
								<img src={User} alt='User' />
							</div>
							<div className={styles.text}>Профиль</div>
						</div>
					</Link>
					<Link to='/personalArea/orders'>
						<div className={styles.selection}>
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
								<img src={Truck} alt='Truck' />
							</div>
							<div className={styles.text}>Профиль доставки</div>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.profile}>
				<div className={styles.header}>
					<div className={styles.header_title}>Ваш профиль</div>
					<div className={styles.header_description}>
						В этом разделе находится информация о Вашем профиле. Ваше имя будет
						отображаться на веб-сайте в оставленных Вами отзывах к товарам.
						Остальная информация доступна только Вам и администраторам
						веб-сайта.
					</div>
				</div>
				<div className={styles.form}>
					<div className={styles.initials}>
						<div className={styles.name}>
							<div className={styles.text}>Имя</div>
							<div className={styles.input}>
								<input
									name='Name'
									id='Name'
									className={styles.inputText}
									placeholder='Введите Ваше имя'
									onChange={(event) => changeInputRegister(event)}
									value={register.Name}
								/>
							</div>
						</div>
						<div className={styles.surname}>
							<div className={styles.text}>Фамилия</div>
							<div className={styles.input}>
								<input
									name='Surname'
									id='Surname'
									className={styles.inputText}
									placeholder='Введите Вашу фамилию'
									onChange={(event) => changeInputRegister(event)}
									value={register.Surname}
								/>
							</div>
						</div>
					</div>
					<div className={styles.email}>
						<div className={styles.text}>Email*</div>
						<div className={styles.input}>
							<input
								className={styles.inputTextData}
								value={store.user[0].email}
							/>
						</div>
					</div>
					<div className={styles.password}>
						<div className={styles.text}>Password*</div>
						<div className={styles.input}>
							<input
								className={styles.inputTextData}
								value={store.user[0].password}
							/>
						</div>
						<div className={styles.changePaswword}>Изменить пароль</div>
					</div>
					<div className={styles.btnwrapper}>
						<button className={styles.btn} onClick={submitChackin}>
							Сохранить
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default observer(PersonalArea)
