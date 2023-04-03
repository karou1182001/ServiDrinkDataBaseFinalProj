import React, { Fragment, useEffect, useState } from "react";
import EditUser from "./editUsers";

const ListUsers = () => {
  
  /*=============================================
  =            VARIABLES            =
  =============================================*/
  //The useState initialized as an empty array
  const [users, setUsers] = useState([]);

  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
  //delete user function
  const deleteUser = async userid => {
    try {
      const deleteuser = await fetch(`http://localhost:5000/ServiDrink/${userid}`, {
        method: "DELETE"
      });

      setUsers(users.filter(user => user.userid !== userid));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/ServiDrink/allusers");
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //your component needs to do something after render
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        {/*First row */}
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {/*Traverse all the users that has the database */}
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {users.map(user => (
            <tr key={user.userid}>
              <td>{user.name}</td>
              <td>
                 <EditUser user={user}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.userid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUsers;