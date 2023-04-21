import React, { Fragment, useEffect, useState } from "react";
import video from "../design/designPage/video/wave-cafe-video-bg.mp4";
//Image and videos
const ManageRestaurant = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [restaurantList, setRestaurantList] = useState([]);
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
    const addRestaurant = async () => {

    };

    const getRestaurants = async userid => {
        try {
          const body = {userid}
          const response = await fetch("http://localhost:5000/ServiDrink/getUserRestaurant",
        {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
        });
          const jsonData = await response.json();
    
          setRestaurantList(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

      useEffect(() => {
        getRestaurants(parseInt(localStorage.getItem("currentUser")));
      }, []);

  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <Fragment>
      <div className = "container">
        <h1 className="text-center mt-5" style={{color: "white"}}>Restaurant Management</h1>
        {" "}
        <table className="table mt-5 text-center" style= {{color: "white"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit Name</th>
                    <th>Edit Menu</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    restaurantList.map(restaurant => (
                        <tr key={restaurant.restid}>
                            <td>{restaurant.name}</td>
                        </tr>
                    ))

                }
            </tbody>
        </table>
        <button className="btn btn-success">Add New Restaurant</button>
        <button className="btn btn-success">Add New Product</button>
      </div>
    </Fragment>
  );
};
/*=====  End of HTML  ======*/

export default ManageRestaurant;