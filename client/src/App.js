import React, { Fragment, useState} from "react";
import './App.css';

//Components
import InputUser from "./components/inputUser";
import ListUsers from "./components/listUsers";
import Login from "./components/login";
import  Register from "./components/register";

/*
<InputUser />
        <ListUsers/> */
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
