import React, { useState } from 'react'

import { ProductItem } from '../../ui'

import logo from 'assets/img/Mens-T-shirt/Ellipse 36.png'

import styles from './styles.module.css'

function MaketPage({ listProductX, title, src }) {
	const [pageNumber, setPageNumber] = useState(1)
	// Написать вместо X название элементов(Продукта) и заполнить массив
	// let listProductX = [
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo2, description: 'Мужская футболка KAWASAKI', model: 'ST-T1026 BLUE', price: '1 600 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	//     {img: logo, description: 'Поло мужское LI-NING', model: 'APLH217-1', price: '950 ₽'},
	// ];
	// название страницы
	// let title = 'Мужские футболки';
	// Путь страницы
	// let src = 'Главная-Каталог-Бадминтон-Мужские одежды-Футболки';
	function NumberPlus() {
		if (pageNumber >= 1) {
			setPageNumber(pageNumber + 1)
		}
	}
	function NumberMinus() {
		if (pageNumber >= 2) {
			setPageNumber(pageNumber - 1)
		}
	}
	function ShowList() {
		return (
			<div className={styles.wrapperItems}>
				{listProductX.map((item) => {
					return <ProductItem item={item} />
				})}
			</div>
		)
	}
	return (
		<div>
			<div className={styles.wrapperSrc}>
				{src.map((item, id) => {
					if (id != src.length - 1) {
						return (
							<div className={styles.src}>
								{item} <img className={styles.srcImg} src={logo} />
							</div>
						)
					} else {
						return <div className={styles.src}>{item}</div>
					}
				})}
			</div>
			<div className={styles.wrapperSearch}>
				<div className={styles.title}>{title}</div>
				<div className={styles.filter}>
					<input className={styles.input} type='text' placeholder='Поиск' />
					<a className={styles.filterCategory}>
						Сортировать по: Последние добавленные
					</a>
					<a className={styles.filterbtn}>Фильтрация</a>
				</div>
			</div>
			<div className={styles.wrapperItems}>
				{listProductX.map((item, id) => {
					if (id < pageNumber * 5 && id >= (pageNumber - 1) * 5) {
						return <ProductItem item={item} />
					}
				})}
			</div>
			<div className={styles.pagination}>
				<button
					className={styles.btn}
					onClick={() => {
						NumberMinus()
					}}
				>
					{'<'}
				</button>
				<input type='text' value={pageNumber} className={styles.input1} />
				<button
					className={styles.btn}
					onClick={() => {
						NumberPlus()
					}}
				>
					{'>'}
				</button>
			</div>
		</div>
	)
}

export default MaketPage
