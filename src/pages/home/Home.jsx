import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Header,
  Footer,
  SignUp,
  SignIn,
  InfoAndOffers,
  NavToCategories,
  Carousel,
  PreviewNews,
  PreviewNewProducts,
  PreviewPopularProducts,
  AboutUs,
} from "components";

function Home() {
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <SignUp
        registration={registration}
        setRegistration={setRegistration}
        inputShow={inputShow}
        setInputShow={setInputShow}
      />
      <SignIn
        registration={registration}
        setRegistration={setRegistration}
        inputShow={inputShow}
        setInputShow={setInputShow}
      />
      <Header setRegistration={setRegistration} />
      <InfoAndOffers />
      <NavToCategories />
      <PreviewNewProducts />
      <Carousel />
      <PreviewNews />
      <PreviewPopularProducts />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
