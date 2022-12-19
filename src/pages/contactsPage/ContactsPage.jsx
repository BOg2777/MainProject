import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header, AboveHeader, Footer, Contacts } from "components";

function ContactsPage() {
  const [registration, setRegistration] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <AboveHeader />
      <Header setRegistration={setRegistration} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactsPage;
