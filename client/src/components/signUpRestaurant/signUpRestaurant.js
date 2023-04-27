import React, { useState } from "react";

export const RegisterRest = (props) => {
    
    /*=============================================
    =            VARIABLES            =
    =============================================*/
    const [rname, setrname] = useState('');
    const [description, setDescription] = useState('');
    const [restImage, setrestImage] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');

    
    /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const body = { "rname" : rname, 
            "restImage" : restImage,
            "phone" : phone, 
            "street": street, 
            "city": city, 
            "state": state, 
            "zip": zip,
            "description": description}
            const response = await fetch("http://localhost:5000/ServiDrink/NewRestaurant", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          //This refresh and show the changes
          window.location = "/res";
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
            <label htmlFor="rname">Name of restaurant</label>
            <input value={rname} rname="rname" onChange={(e) => setrname(e.target.value)} id="rname" placeholder="Full name" />
            <label htmlFor="rname">Image</label>
            <input value={restImage} onChange={(e) => setrestImage(e.target.value)}type="text" placeholder="Restaurant Logo" id="restImage" rname="restImage" />
            <label htmlFor="description">description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="Restaurant description" id="description" rname="description" />
            <label htmlFor="phone">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}type="phone" placeholder="************" id="phone" rname="phone" />
            <label htmlFor="state">State</label>
            <input value={state} onChange={(e) => setState(e.target.value)}type="state" placeholder="Florida" id="state" rname="state" />
            <label htmlFor="city">City</label>
            <input value={city} onChange={(e) => setCity(e.target.value)}type="city" placeholder="Tampa" id="city" rname="city" />
            <label htmlFor="street">Street</label>
            <input value={street} onChange={(e) => setStreet(e.target.value)}type="street" placeholder="Address" id="street" rname="street" />
            <label htmlFor="zip">Zip</label>
            <input value={zip} onChange={(e) => setZip(e.target.value)}type="zip" placeholder="24252" id="zip" rname="zip" />
            <h1></h1>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    );
};

export default RegisterRest;