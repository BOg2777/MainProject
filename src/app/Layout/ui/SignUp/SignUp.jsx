import React, { useState } from 'react'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Store, Modal } from 'app/App'

import logoApple from 'assets/img/Registration/Apple.svg'
import logoFacebook from 'assets/img/Registration/Facebook.svg'
import logoGoogle from 'assets/img/Registration/Google.svg'
import logoVk from 'assets/img/Registration/Vk-fill.svg'
import logoYandex from 'assets/img/Registration/Yandex.svg'
import Cross from 'assets/img/Registration/Vector.svg'

import styles from './styles.module.css'

function SignUp() {
	const [store, setStore] = useContext(Store)
	const [modal, setModal] = useContext(Modal)
	let passw = /^[A-Za-z]\w{7,14}$/

	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value)
	}
	function isPasswordValid(value) {
		return passw.test(value)
	}

	const [register, setRegister] = useState({
		Email: '',
		Password: '',
		PasswordRepeat: ''
	})
	function OpenInput() {
		setModal((pre) => ({ ...pre, isRegistration: !modal.isRegistration }))
		setModal((pre) => ({ ...pre, isSignIn: !modal.isSignIn }))
	}

	function changeInputRegister(event) {
		setRegister((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	const submitChackin = (event) => {
		event.preventDefault()
		if (!isEmailValid(register.Email)) {
			alert('You did not enter email')
		} else if (!isPasswordValid(register.Password)) {
			alert(
				'Password must consist of one lowercase, uppercase letter and number, at least 8 characters'
			)
		} else if (register.Password === register.Password2) {
			alert('Repeated password incorrectly')
		} else {
			console.log('Все ок')
			setStore((pre) => ({
				...pre,
				isLoggedIn: true,
				user: store.user.push({
					email: register.Email,
					password: register.Password
				})
			}))
			// user.push({ email: register.Email, password: register.Password })
		}
		setModal((pre) => ({ ...pre, isRegistration: !modal.isRegistration }))
		setRegister({
			Email: '',
			Password: '',
			PasswordRepeat: ''
		})
		setStore((pre) => ({ ...pre, isLoggedIn: true }))
		console.log(store)
	}
	function Input(name, placeholder, repeat = '') {
		return (
			<div className={styles.nameInputWrapper}>
				<p className={styles.nameInput}>
					{repeat} {name}*:{' '}
				</p>
				<input
					type={String(name)}
					placeholder={placeholder}
					id={String(name + repeat)}
					name={String(name + repeat)}
					value={register[String(name + repeat)]}
					onChange={(event) => changeInputRegister(event)}
					className={styles.Input}
				/>
			</div>
		)
	}
	if (modal.isRegistration) {
		return (
			<div>
				<div className={styles.blur}>
					<div className={styles.wrapper}>
						<div>
							<div
								className={styles.crossWrapeer}
								onClick={() =>
									setModal((pre) => ({
										...pre,
										isRegistration: !modal.isRegistration
									}))
								}
							>
								<img src={Cross} className={styles.cross} />
							</div>
						</div>
						<h2 className={styles.title}>Регистрация:</h2>
						<div className={styles.wrapperImg}>
							<div className={styles.img}>
								<img src={logoApple} className={styles.logo} />
							</div>
							<div className={styles.img}>
								<img src={logoFacebook} className={styles.logo} />
							</div>
							<div className={styles.img}>
								<img src={logoGoogle} className={styles.logo} />
							</div>
							<div className={styles.img}>
								<img src={logoVk} className={styles.logo} />
							</div>
							<div className={styles.img}>
								<img src={logoYandex} className={styles.logo} />
							</div>
						</div>
						<h1 className={styles.descriptionIcons}>
							или зарегистрируйтесь с помощью email
						</h1>
						<form onSubmit={submitChackin} className={styles.form}>
							{Input('Email', '  Введите Ваш адрес эл. почты')}
							{Input('Password', '  Введите Ваш пароль')}
							{Input('Password', '  Повторите Ваш пароль', 'Repeat')}
							<input
								type='submit'
								value='Зарегистрироваться'
								className={styles.btn}
							/>
						</form>
						<hr className={styles.line}></hr>
						<div className={styles.otherInput}>
							<p>Уже зарегистрированы?</p>
							<p className={styles.textInput} onClick={OpenInput}>
								Войти
							</p>
						</div>
						<div className={styles.footer}>
							Создавая аккаунт я соглашаюсь{' '}
							<p className={styles.footer_title}>
								c Политикой конфиденциальности и Условиями пользования
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default observer(SignUp)
