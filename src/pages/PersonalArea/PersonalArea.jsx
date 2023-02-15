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
	function Escape() {
		setChangePassword(!changePassword)
	}
	function submitChackinPassword() {
		setStore((pre) => ({
			...pre,
			user: {
				email: store.user.email,
				password: password.password
			}
		}))
		setChangePassword(!changePassword)
	}
	function ChangePassword() {
		if (changePassword)
			return (
				<div>
					<h1 className={styles.changepassword}>Изменение пароля</h1>
					<p className={styles.text}>Новый пароль*</p>
					<div className={styles.input}>
						<input
							name='password'
							className={styles.inputTextData}
							value={password.password}
							onChange={changeInputPassword}
						/>
					</div>
					<p className={styles.text}>Повторите пароль*</p>
					<div className={styles.input}>
						<input
							name='passwordRepeat'
							className={styles.inputTextData}
							value={password.passwordRepeat}
							onChange={changeInputPassword}
						/>
					</div>
					<div className={styles.wrapperbtnChange}>
						<div className={styles.btnwrapper}>
							<button className={styles.btnOtm} onClick={Escape}>
								Отменить
							</button>
						</div>
						<div className={styles.btnwrapper}>
							<button className={styles.btnCox} onClick={submitChackinPassword}>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			)
		else
			return (
				<div>
					<div className={styles.password}>
						<div className={styles.text}>Password*</div>
						<div className={styles.input}>
							<input
								className={styles.inputTextData}
								value={store.user.password}
							/>
						</div>
					</div>
					<div
						className={styles.changePaswword}
						onClick={() => {
							setChangePassword(!changePassword)
						}}
					>
						Изменить пароль
					</div>
					<div className={styles.btnwrapper}>
						<button className={styles.btn} onClick={submitChackin}>
							Сохранить
						</button>
					</div>
				</div>
			)
	}
	const [store, setStore] = useContext(Store)
	console.log(store)
	const [register, setRegister] = useState({
		Name: '',
		Surname: '',
		PasswordRepeat: ''
	})
	const [password, setPassword] = useState({
		password: '',
		passwordRepeat: ''
	})
	const [changePassword, setChangePassword] = useState(false)
	function changeInputRegister(event) {
		setRegister((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	function changeInputPassword(event) {
		setPassword((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	const submitChackin = () => {
		setStore((pre) => ({
			...pre,
			userInitians: {
				username: register.Name,
				Surname: register.Surname
			}
		}))
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
								value={store.user.email}
							/>
						</div>
					</div>
					{ChangePassword()}
				</div>
			</div>
		</div>
	)
}

export default observer(PersonalArea)
