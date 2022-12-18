import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Header,AboveHeader,Footer,FAQ } from "components";

function FaqPage() {
  const [registration, setRegistration] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

  return (
    <div>
        <AboveHeader />
        <Header setRegistration={setRegistration} />
        <FAQ />
        <Footer/>
    </div>
  );
  }
  
  export default FaqPage;