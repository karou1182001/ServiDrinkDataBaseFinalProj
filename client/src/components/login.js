import React, { useState } from "react";
//Video that explains the library of sweet alert: https://www.youtube.com/watch?v=f45RAS85TnA
import swal from "sweetalert";

export const Login = (props) => {
    /*=============================================
    =            VARIABLES            =
    =============================================*/
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    //Get one user and verify
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const body = {  
            "email" : email,
            "password": pass}
            const response = await fetch("http://localhost:5000/ServiDrink/getUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          if(!response.length) {
            swal({
              title: "Login failed",
              text:  "The entered credentials do not match any on our system",
              icon: "error",
              button: "Ok"
            });
          }
          const data = await response.json()
          localStorage.setItem("currentUser", parseInt(data['userid']))
          //localStorage.clear()
          //This refresh and show the changes
          //window.location = "/main";
          //Alert using the library
          swal({
            title: "Login successful",
            text:  "You have logged in",
            icon: "success",
            button: "Ok"
          });

          window.location = "/main";
        } catch (err) {
          console.error(err.message);
        }
      };

     /*=============================================
     =            HTML            =
    =============================================*/
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;