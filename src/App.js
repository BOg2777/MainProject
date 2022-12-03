import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import { Header,AboveHeader,Footer, Registration,InputUser, InfoAndOffers } from "components";
import { TShirts,News } from "pages";

import 'App.css';

function App() {
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  return (
    <div>
      <Registration registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow}/>
      <InputUser registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} />
      <AboveHeader />
      <Header setRegistration={setRegistration} />
      <InfoAndOffers />
      <Routes>
            <Route path='/Stock' element={ < TShirts /> } />
            <Route path='/News' element={ < News /> }/>     
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
