import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header, Footer, ClubProgram } from "components";

function ClubProgramPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <ClubProgram />
      <Footer />
    </div>
  );
}

export default ClubProgramPage;
