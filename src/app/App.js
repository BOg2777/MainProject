import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Layout } from "./Layout";
import Router from "./Router";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
