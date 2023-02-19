import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

import Box from 'assets/img/PersonalArea/Box.png'
import LinkImg from 'assets/img/PersonalArea/Link-chain.png'
import Truck from 'assets/img/PersonalArea/Truck.png'
import User from 'assets/img/PersonalArea/User.png'
import { useState } from 'react'
import { Alert } from '@mui/material'

function Subscripe() {
	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value)
	}
	const [alert1, setAlert] = useState(false)
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
	function submitChackin() {
		if (alert1) {
			return (
				<div>
					<Alert
						onClose={() => {
							setAlert(!alert1)
						}}
					>
						This is a success alert — check it out1!
					</Alert>
				</div>
			)
		}
	}
	function Button() {
		if (alert1) {
			return (
				<button
					className={styles.btn}
					onClick={() => {
						if (!isEmailValid(register.Surname)) {
							alert('You did not enter email')
						} else {
							setAlert(!alert1)
						}
					}}
				>
					Отменить
				</button>
			)
		} else {
			return (
				<button
					className={styles.btn}
					onClick={() => {
						if (!isEmailValid(register.Surname)) {
							alert('You did not enter email')
						} else {
							setAlert(!alert1)
						}
					}}
				>
					Сохранить
				</button>
			)
		}
	}
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
						<div className={styles.selection}>
							<div className={styles.img}>
								<img src={Box} alt='Box' />
							</div>
							<div className={styles.text}>Заказы</div>
						</div>
					</Link>
					<Link to='/personalArea/link'>
						<div className={styles.selectionActive}>
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
					<div className={styles.header_title}>Подписка</div>
					<div className={styles.header_description}>
						Вы можете подписаться на нашу рассылку, чтобы получать сообщения об
						акциях на Вашу электронную почту
					</div>
				</div>
				<div>
					<div className={styles.email}>
						<div className={styles.textEmail}>Email*</div>
						<div className={styles.input}>
							<input
								className={styles.inputTextData}
								name='Surname'
								id='Surname'
								// className={styles.inputText}
								placeholder='Введите Вашу почту'
								onChange={(event) => changeInputRegister(event)}
								value={register.Surname}
							/>
						</div>
					</div>
					<div className={styles.btnwrapper}>{Button()}</div>
					{submitChackin()}
				</div>
			</div>
		</div>
	)
}
export default Subscripe
