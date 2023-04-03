import React, { Fragment, useState} from "react";
import '../App.css';

//Components
import InputUser from "./inputUser";
import ListUsers from "./listUsers";

//https://www.youtube.com/watch?v=3yaHWZdH0FM

/*const PrimaryLayout = () => (
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
);*/

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

