import React from 'react';
import { Routes, Route } from 'react-router-dom'

import "./App.css";
import Header from './components/Header/Header';
import TShirts from './pages/badminton/MensClothing/T-shirts/T-shirts';
import News from './pages/news/News';

function App() {
  return (
    <>
      <Header />
        <div className='wrapper'>
          <Routes>
            <Route path='/Stock' element={ < TShirts /> } />
            <Route path='/News' element={ < News /> }/>     
          </Routes>
        </div>
    </>
  );
}

export default App;
