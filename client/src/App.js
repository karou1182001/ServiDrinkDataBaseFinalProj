import React, { Fragment, useState} from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

//Components
import AdminUsers from "./components/adminUsers";
import SignUpLogin from "./components/signUpLogin";

//https://www.youtube.com/watch?v=3yaHWZdH0FM



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <SignUpLogin />} />
            <Route path='/adminUsers' element={ <AdminUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

