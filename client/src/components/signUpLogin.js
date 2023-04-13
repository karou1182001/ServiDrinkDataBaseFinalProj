import React, { Fragment, useState} from "react";
//import '../design/App.css';

//Components
import Login from "./login";
import  Register from "./register";

//https://www.youtube.com/watch?v=3yaHWZdH0FM


function SignUpLogin() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => 
  {
    setCurrentForm(formName);
  }
  return (
    <Fragment>
      <div className="SignUpLogin">
      {
        /*If currentform is login will show login form, if not shows reg */
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    </Fragment>
  );
}

export default SignUpLogin;

