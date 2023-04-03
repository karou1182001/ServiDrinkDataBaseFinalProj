import React, { Fragment, useState} from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

//Components
import InputUser from "./components/inputUser";
import ListUsers from "./components/listUsers";
import Login from "./components/login";
import  Register from "./components/register";

//https://www.youtube.com/watch?v=3yaHWZdH0FM
/*
<InputUser />
        <ListUsers/> */

const PrimaryLayout = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">ServiDrink</Link>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <Routes>
        <Route path="/home" component={InputUser} />
        <Route path="/about" component={ListUsers} />
      </Routes>
    </div>
  </div>
);

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => 
  {
    setCurrentForm(formName);
  }
  return (
    <Fragment>
      <div className="App">
      {
        /*If currentform is login will show login form, if not shows reg */
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    </Fragment>
  );
}

export default App;

/*<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ServiDrink</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">
              
            </span></a>
          </div>
        </div>
      </nav>*/