import React, { Fragment, useState} from "react";
import '../../design/designPage/css/SignUpLogin.css';

//Components
import LoginRest from "./loginRestaurant";
import  RegisterRest from "./signUpRestaurant";

//https://www.youtube.com/watch?v=3yaHWZdH0FM

//Image and videos
import video from "../../design/designPage/video/wave-cafe-video-bg.mp4";


function SignUpLoginRest() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => 
  {
    setCurrentForm(formName);
  }
  return (
    <Fragment>
      {/*<div className="SignUpLogin">*/}
      <div class="SignUpLogin">
        <video autoPlay loop muted className="video-background">
          <source src={video} type="video/mp4" />
        </video>
        {
          /* If currentForm is login, it will show the login form; if not, it shows the registration form */
          currentForm === "login" ? (
            <LoginRest onFormSwitch={toggleForm} />
          ) : (
            <RegisterRest onFormSwitch={toggleForm} />
          )
        }
      </div>
    </Fragment>
  );
}

export default SignUpLoginRest;

