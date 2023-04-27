//A guide
//https://www.youtube.com/watch?v=ldYcgPKEZC8
import React, { Fragment, useState} from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//import './design/App.css';

//Components
import AdminUsers from "./components/adminUsers";
import SignUpLogin from "./components/signUpLogin";
import Template from "./components/userview/template";
import ManageRestaurant from "./components/manageRestaurant";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <SignUpLogin />} />
            <Route path='/main' element={ <Template/>} />
            <Route path='/adminUsers' element={ <AdminUsers />} />
            <Route path = '/manage' element = { <ManageRestaurant /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

