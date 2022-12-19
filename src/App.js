import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'App.css';

import { Home,TShirts,News} from "pages";


function App() {
  const [dataBase, setDataBase] = useState([{
    email:'Developments@gmail.com',
    password:'Devel2022',
  },]);
  const [registration, setRegistration] = useState(false);
  const [inputShow, setInputShow] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/Home" element={< Home setDataBase={setDataBase} dataBase={dataBase} registration={registration} setRegistration={setRegistration} inputShow={inputShow} setInputShow={setInputShow} isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>}/> 
        <Route path='/News' element={< News />} />
        <Route path="/catalog/badminton/men's_clothing/T-shirts" element={ < TShirts /> } />
      </Routes> 
    </div>
  );
}

export default App;
