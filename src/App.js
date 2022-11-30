import React from 'react';

import "./App.css";
import Header from './components/Header/Header';
import TShirts from './pages/badminton/MensClothing/T-shirts/T-shirts';
import News from './pages/news/News';

import AboveHeader from './components/AboveHeader/AboveHeader';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <AboveHeader />
      <Header />
      <TShirts />
      < News />
      <Footer/>
    </div>
  );
}

export default App;
