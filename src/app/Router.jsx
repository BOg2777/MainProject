import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, TShirts, News, NotFoundPage, ClubProgramPage } from "pages";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/News" element={<News />} />
      <Route
        path="/catalog/badminton/men's_clothing/T-shirts"
        element={<TShirts />}
      />
      <Route path="/clubProgram" element={<ClubProgramPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
