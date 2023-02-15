import React from 'react'

import styles from './styles.module.css'

import Box from 'assets/img/PersonalArea/Box.png'
import Link from 'assets/img/PersonalArea/Link-chain.png'
import Truck from 'assets/img/PersonalArea/Truck.png'
import User from 'assets/img/PersonalArea/User.png'

function PersonalArea() {
	return (
		<div className={styles.personalArea}>
			<div className={styles.navBar}>
				<div className={styles.selection1}>
					<div className={styles.img}>
						<img src={User} alt='User' />
					</div>
					<div className={styles.text}>Профиль</div>
				</div>
				<div className={styles.selection}>
					<div className={styles.img}>
						<img src={Box} alt='Box' />
					</div>
					<div className={styles.text}>Заказы</div>
				</div>
				<div className={styles.selection}>
					<div className={styles.img}>
						<img src={Link} alt='Link' />
					</div>
					<div className={styles.text}>Подписка</div>
				</div>
				<div className={styles.selection}>
					<div className={styles.img}>
						<img src={Truck} alt='Truck' />
					</div>
					<div className={styles.text}>Профиль доставки</div>
				</div>
			</div>
			<div className={styles.profile}></div>
		</div>
	)
}

export default PersonalArea
