//A guide
//https://www.youtube.com/watch?v=ldYcgPKEZC8
import React, { Fragment, useState} from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//import './design/App.css';

//Components
import AdminUsers from "./components/adminUsers";
import SignUpLogin from "./components/signUpLogin";
import Template from "./components/userview/template";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Template/>} />
            <Route path='/signup' element={ <SignUpLogin />} />
            <Route path='/adminUsers' element={ <AdminUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

