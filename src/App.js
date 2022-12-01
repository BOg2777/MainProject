import React from 'react';
import { Routes, Route } from 'react-router-dom'

import "./App.css";
import Header from './components/Header/Header';
import TShirts from './pages/badminton/MensClothing/T-shirts/T-shirts';
import News from './pages/news/News';

import AboveHeader from './components/AboveHeader/AboveHeader';
import Footer from './components/Footer/Footer'

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
