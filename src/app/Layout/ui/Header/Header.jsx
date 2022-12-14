import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Modal, Store } from 'app/App'
import SideBar from 'app/Layout/ui/SideBar/SideBar'

import logo from 'assets/img/Header/Logo.svg'
import search from 'assets/img/Header/Search.svg'
import { ReactComponent as Menu } from 'assets/img/Header/Filter.svg'
import { ReactComponent as Favourite } from 'assets/img/Header/Favourite.svg'
import { ReactComponent as User } from 'assets/img/Header/User.svg'
import { ReactComponent as ShoppingBag } from 'assets/img/Header/ShoppingBag.svg'

import styles from './styles.module.css'

function Header() {
	const [store, setStore] = useContext(Store)
	const [modal, setModal] = useContext(Modal)
	const [sideBar, setSideBar] = useState(false)
	const showSideBar = () => setSideBar(!sideBar)
	function personalArea() {
		if (store.isLoggedIn) {
			return (
				<Link to='/personalArea'>
					<li
						className={styles.user}
						onClick={() => {
							console.log('ok')
						}}
					>
						<User className={styles.userImg} />
					</li>
				</Link>
			)
		} else
			return (
				<li
					className={styles.user}
					onClick={() => {
						setModal((pre) => ({ ...pre, isSignIn: true }))
					}}
				>
					<User className={styles.userImg} />
				</li>
			)
	}
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.appNavigation}>
					<ul className={styles.nav}>
						<li className={styles.navList} onClick={showSideBar}>
							<Menu className={styles.menu} />
							Каталог
						</li>
						<Link to='/disconts' className={styles.navList}>
							Акции
						</Link>
						<Link to='/News' className={styles.navList}>
							Новости
						</Link>
					</ul>
					<Link to='/home' className={styles.logo}>
						<img src={logo}></img>
					</Link>
					<ul className={styles.userBar}>
						<li className={styles.headerSearch}>
							{' '}
							<img src={search} alt='search' />{' '}
							<input
								type='text'
								placeholder='Поиск'
								className={styles.search}
							/>
						</li>
						<li className={styles.favourites}>
							<Favourite className={styles.favourite} />{' '}
						</li>
						{personalArea()}
						<li className={styles.shoppingBag}>
							<ShoppingBag className={styles.shoppingBagImg} />
						</li>
					</ul>
				</nav>
			</header>
			{sideBar ? <SideBar /> : ''}
		</>
	)
}

export default observer(Header)
