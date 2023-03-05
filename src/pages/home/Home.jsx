import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { ShoppingBasket, Store } from 'app/App'

import {
	InfoAndOffers,
	NavToCategories,
	Carousel,
	PreviewNews,
	PreviewNewProducts,
	PreviewPopularProducts,
	AboutUs
} from './ui'

function Home() {
	const { pathname } = useLocation()
	const [store, setStore] = useContext(Store)
	const [shoppingBasket, setShoppingBasket] = useContext(ShoppingBasket)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	setTimeout(() => {
		if (localStorage.getItem('User') != null) {
			setStore(JSON.parse(localStorage.getItem('User')))
		}
	}, 500)
	setTimeout(() => {
		if (localStorage.getItem('ShoppingBasket') != []) {
			setShoppingBasket(JSON.parse(localStorage.getItem('ShoppingBasket')))
		}
	}, 400)
	return (
		<div>
			<InfoAndOffers />
			{/* <NavToCategories /> */}
			<PreviewNewProducts />
			<Carousel />
			<PreviewNews />
			<PreviewPopularProducts />
			<AboutUs />
		</div>
	)
}

export default observer(Home)
