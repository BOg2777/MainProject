import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Header,AboveHeader,Footer } from "components";
import { TShirts,News } from "pages";

import "App.css";

function App() {
  return (
    <>
      <AboveHeader />
      <Header />
      <Routes>
            <Route path='/Stock' element={ < TShirts /> } />
            <Route path='/News' element={ < News /> }/>     
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
