import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import {
	Home,
	SingleNewsPage,
	News,
	TShirts,
	ClubProgramPage,
	FaqPage,
	ContactsPage,
	NotFoundPage,
	PaymentAndDeliveryPage,
	PersonalArea,
	Subscripe,
	Truck
} from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.NEWS} element={<News />} />
			<Route path={ROUTES.NEWS_ID} element={<SingleNewsPage />} />
			<Route path={ROUTES.TSHIRTS} element={<TShirts />} />
			<Route path={ROUTES.CLUB_PROGRAM} element={<ClubProgramPage />} />
			<Route path={ROUTES.FAQ} element={<FaqPage />} />
			<Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
			<Route
				path={ROUTES.PAYMENTAND_DELIVERY}
				element={<PaymentAndDeliveryPage />}
			/>
			<Route path={ROUTES.PERSONAL_AREA} element={<PersonalArea />} />
			<Route path='*' element={<NotFoundPage />} />
			<Route path={ROUTES.PERSONAL_AREA_LINK} element={<Subscripe />} />
			<Route path={ROUTES.PERSONAL_AREA_ORDERS} element={<Truck />} />
			<Route
				path={ROUTES.PERSONAL_AREA_TRUCK}
				element={<PaymentAndDeliveryPage />}
			/>
		</Routes>
	)
}

export default observer(Router)
