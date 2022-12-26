import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

import {InfoAndOffers,NavToCategories,Carousel,PreviewNews,PreviewNewProducts,PreviewPopularProducts,AboutUs } from "./ui";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

  return (
    
    <div>
        <InfoAndOffers />
        <NavToCategories />
        <PreviewNewProducts />
        <Carousel />
        <PreviewNews />
        <PreviewPopularProducts />
        <AboutUs/>
    </div>
  );
  }
  
  export default Home;