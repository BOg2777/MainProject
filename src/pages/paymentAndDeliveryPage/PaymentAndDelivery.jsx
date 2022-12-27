import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

import { PaymentAndDelivery } from "./ui";


function PaymentAndDeliveryPage() {
  const { pathname } = useLocation();

  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

  return (
    <div>
        <PaymentAndDelivery />
    </div>
  );
  }
  
  export default PaymentAndDeliveryPage;