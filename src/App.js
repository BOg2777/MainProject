import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'App.css';

import { Home,TShirts,News,NotFoundPage,ClubProgramPage} from "pages";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={< Home />} /> 
        <Route path='/News' element={< News />} />
        <Route path="/catalog/badminton/men's_clothing/T-shirts" element={ < TShirts /> } />
        <Route path="/clubProgram" element={< ClubProgramPage />} /> 
        <Route path="*" element={<NotFoundPage/>} />
      </Routes> 
    </div>
  );
}

export default App;
