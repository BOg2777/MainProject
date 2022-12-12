import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import { Header,AboveHeader,Footer, SignUp,SignIn, InfoAndOffers,NavToCategories,Carousel } from "components";
import { TShirts,News } from "pages";

import 'App.css';
import { SingleNewsPage } from 'pages/SingleNewsPage';

function App() {
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  return (
    <div>
        <SignUp registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow}/>
        <SignIn registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} />
        <AboveHeader />
        <Header setRegistration={setRegistration} />
        {/* <InfoAndOffers />
        <NavToCategories /> */}
            <Routes>
              <Route path="/catalog/badminton/men's_clothing/T-shirts" element={ < TShirts /> } />
              <Route path='/News' element={ < News /> }/>
              <Route path='/News/id' element={ < SingleNewsPage /> }/>     
            </Routes>
            {/* <Carousel /> */}
        <Footer/>
    </div>
  );
}

export default App;
