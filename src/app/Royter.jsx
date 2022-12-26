import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import {
  Home,
  SingleNewsPage,
  News,
  TShirts,
  ClubProgramPage,
  FaqPage,
  ContactsPage,
  NotFoundPage,
} from "pages";
import { ROUTES } from "shared/consts";

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>}/>
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path={ROUTES.NEWS_ID} element={<SingleNewsPage />} />
      <Route path={ROUTES.TSHIRTS} element={<TShirts />} />
      <Route path={ROUTES.CLUBP_ROGRAM} element={<ClubProgramPage />} />
      <Route path={ROUTES.FAQ} element={<FaqPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default observer(Router);
