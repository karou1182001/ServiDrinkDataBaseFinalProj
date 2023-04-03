import React, { useState } from "react";

export const Register = (props) => {
    
    /*=============================================
    =            VARIABLES            =
    =============================================*/
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    
    /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const body = { "name" : name, 
            "phone" : "35267844", 
            "email" : email,
            "street": "123433 Bruce", 
            "city": "Tampa", 
            "state": "FL", 
            "zip": "33612",
            "password": pass,
            "type": "normal"}
            const response = await fetch("http://localhost:5000/ServiDrink/NewUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          //This refresh and show the changes
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    
    /*=============================================
    =            HTML            =
    =============================================*/
    
    
    
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    );
};

export default Register;