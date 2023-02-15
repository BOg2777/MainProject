import React, { useState, createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Layout } from './Layout'
import Router from './Royter'

export const Store = createContext()
export const Modal = createContext()
export const ShoppingBasket = createContext()

function App() {
	const [store, setStore] = useState({
		user: [
			{
				email: 'Developments@gmail.com',
				password: 'Devel2022'
			}
		],
		isLoggedIn: false
	})

	const [modal, setModal] = useState({
		isRegistration: false,
		isSignIn: false
	})
	const [shoppingBasket, setShoppingBasket] = useState([])

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Store.Provider value={[store, setStore]}>
					<Modal.Provider value={[modal, setModal]}>
						<ShoppingBasket.Provider
							value={[shoppingBasket, setShoppingBasket]}
						>
							<Layout>
								<Router />
							</Layout>
						</ShoppingBasket.Provider>
					</Modal.Provider>
				</Store.Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default observer(App)
