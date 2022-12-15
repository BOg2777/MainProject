import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Header,AboveHeader,Footer, SignUp,SignIn, InfoAndOffers,NavToCategories,Carousel,PreviewNews,PreviewNewProducts,PreviewPopularProducts,AboutUs } from "components";

function Home({setDataBase,dataBase, registration,setRegistration,inputShow,setInputShow}) {
  const { pathname } = useLocation();

  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

  return (
    
    <div>
        <SignUp registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} setDataBase={setDataBase} dataBase={dataBase}/>
        <SignIn registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} setDataBase={setDataBase} dataBase={dataBase}/> 
        <AboveHeader />
        <Header setInputShow={setInputShow} />
        <InfoAndOffers setRegistration={setRegistration} />
        <NavToCategories />
        <PreviewNewProducts />
        <Carousel />
        <PreviewNews />
        <PreviewPopularProducts />
        <AboutUs/>
        <Footer/>
    </div>
  );
  }
  
  export default Home;