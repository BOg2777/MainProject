import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'App.css';

import { Home,TShirts,News} from "pages";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={< Home />} /> 
        <Route path='/News' element={< News />} />
        <Route path="/catalog/badminton/men's_clothing/T-shirts" element={ < TShirts /> } />
      </Routes> 
    </div>
  );
}

export default App;
