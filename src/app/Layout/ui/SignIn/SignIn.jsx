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

function SignIn() {
	const [store, setStore] = useContext(Store)
	const [modal, setModal] = useContext(Modal)
	const [register, setRegister] = useState({
		Email: '',
		Password: '',
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

	function Entry(name, placeholder) {
		return (
			<div className={styles.nameInputWrapper}>
				<p className={styles.nameInput}>{name}*: </p>
				<input
					type={String(name)}
					placeholder={placeholder}
					id={String(name)}
					name={String(name)}
					value={register[String(name)]}
					onChange={(event) => changeInputRegister(event)}
					className={styles.Input}
				/>
			</div>
		)
	}

	const submitChackin = (event) => {
		event.preventDefault()
		store.user.forEach((element) => {
			if (
				element.email === register.Email &&
				element.password === register.Password
			) {
				console.log('True')
				setStore((pre) => ({
					...pre,
					isLoggedIn: true,
					user: {
						email: register.Email,
						password: register.Password
					}
				}))
				setModal((pre) => ({
					...pre,
					isSignIn: !pre.isSignIn
				}))
			} else {
				console.log('false')
			}
		})
	}

	function showSignUpModal() {
		setModal((pre) => ({
			...pre,
			isRegistration: !pre.isRegistration,
			isSignIn: !pre.isSignIn
		}))
	}

	if (modal.isSignIn) {
		return (
			<div className={styles.blur}>
				<div className={styles.wrapper}>
					<div>
						<div
							className={styles.crossWrapeer}
							onClick={() => setModal((pre) => ({ ...pre, isSignIn: false }))}
						>
							<img src={Cross} className={styles.cross} />
						</div>
					</div>
					<h2 className={styles.title}>Войти:</h2>
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
					<form className={styles.form} onSubmit={submitChackin}>
						{Entry('Email', '  Введите Ваш адрес эл. почты')}
						{Entry('Password', '  Введите Ваш пароль')}
						<input type='submit' value='Войти' className={styles.btn} />
					</form>
					<hr className={styles.line}></hr>
					<div className={styles.otherInput}>
						<p>Еще не зарегистрированы?</p>
						<p className={styles.textInput} onClick={showSignUpModal}>
							Зарегистрироваться
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
		)
	}
}
export default observer(SignIn)
