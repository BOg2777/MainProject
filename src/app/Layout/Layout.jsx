import React from "react";

import { AboveHeader } from "widgets";

function Layout({ children }) {
  return (
    <div>
      <AboveHeader />

      {children}
    </div>
  );
}

export default Layout;
