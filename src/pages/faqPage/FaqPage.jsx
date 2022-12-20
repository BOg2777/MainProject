import React from 'react';
import { useLocation } from 'react-router-dom';
import {useEffect } from "react";

import {FAQ } from "./ui";

function FaqPage() {
  const { pathname } = useLocation();

  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

  return (
    <div>
        <FAQ />
    </div>
  );
  }
  
  export default FaqPage;