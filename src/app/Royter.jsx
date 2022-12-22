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
import { useState } from "react";

function Router() {
  const [dataBase, setDataBase] = useState([
    {
      email: "Developments@gmail.com",
      password: "Devel2022",
    },
  ]);
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <Home
            setDataBase={setDataBase}
            dataBase={dataBase}
            registration={registration}
            setRegistration={setRegistration}
            inputShow={inputShow}
            setInputShow={setInputShow}
            isSignIn={isSignIn}
            setIsSignIn={setIsSignIn}
          />
        }
      />
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path={ROUTES.NEWSID} element={<SingleNewsPage />} />
      <Route path={ROUTES.TSHIRTS} element={<TShirts />} />
      <Route path={ROUTES.CLUBPROGRAM} element={<ClubProgramPage />} />
      <Route path={ROUTES.FAQ} element={<FaqPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default observer(Router);
