import React, { useState } from "react";
//Video that explains the library of sweet alert: https://www.youtube.com/watch?v=f45RAS85TnA
import swal from "sweetalert";

export const LoginRest = (props) => {
    /*=============================================
    =            VARIABLES            =
    =============================================*/
    const [rname, setrname] = useState('');
    const [phone, setPhone] = useState('');

    /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    //Get one user and verify
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const body = {  
            "rname" : rname,
            "phone": phone}
            const response = await fetch("http://localhost:5000/ServiDrink/getOneRestaurant", {
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
          localStorage.setItem("currentRestaurant", parseInt(data['restid']))
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

          window.location = "/manage";
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
                <label htmlFor="rname">Name of Restaurant</label>
                <input value={rname} onChange={(e) => setrname(e.target.value)}type="rname" placeholder="Restaurant Name" id="rname" name="rname" />
                <label htmlFor="phone">phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="********" id="phone" name="phone" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default LoginRest;