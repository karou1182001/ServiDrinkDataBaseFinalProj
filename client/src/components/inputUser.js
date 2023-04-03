import React, { Fragment, useState } from "react";

const InputTodo = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [description, setDescription] = useState("");
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
  const onSubmitForm = async e => {
    e.preventDefault();
        try {
          const body = { "name" : description, 
            "phone" : "35267844", 
            "email" :  "a@g.c",
            "street": "123433 Bruce", 
            "city": "Tampa", 
            "state": "FL", 
            "zip": "33612",
            "password": "1",
            "type": "normal"}
            const response = await fetch("http://localhost:5000/ServiDrink/NewUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          //This refresh and show the changes
          window.location = "/adminUsers";
        } catch (err) {
          console.error(err.message);
        }
  };

  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <Fragment>
      <h1 className="text-center mt-5">User List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};
/*=====  End of HTML  ======*/

export default InputTodo;