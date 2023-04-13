import React, { Fragment, useState} from "react";
//import '../design/App.css';
import '../design/designPage/css/tooplate-wave-cafe.css'

//Components
import InputUser from "./inputUser";
import ListUsers from "./listUsers";

//https://www.youtube.com/watch?v=3yaHWZdH0FM

function AdminUsers() {
  return (
    <Fragment>
      <div className="container">
        <InputUser />
        <ListUsers/>
        
      </div>
       
    </Fragment>
  );
}

export default AdminUsers;

