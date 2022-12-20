import React from "react";
import { useLocation } from "react-router-dom";
import {useEffect } from "react";

import { Contacts } from "./ui";

function ContactsPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Contacts />
    </div>
  );
}

export default ContactsPage;
