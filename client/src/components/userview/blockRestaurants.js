import React, { Fragment, useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BlockRestaurants = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [restaurants, setRestaurants] = useState([]);
const currentUser = localStorage.getItem("currentUser");
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
 
      const getBlockedRestaurants = async (userid) => {
        try {
          const body = { userid };
          const response = await fetch("http://localhost:5000/ServiDrink/getBlockedRestaurants", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          const jsonData = await response.json();
          
          console.log(jsonData);
      
          setRestaurants(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

  //Delete restaurants

  const handleDelete = async (restid, userid) => {
    try {
      const body = { userid };
      const deleterestaurant = await fetch(`http://localhost:5000/ServiDrink/BlockedRestaurant/${restid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      setRestaurants(restaurants.filter(restaurant => restaurant.restid !== restid));

      window.location = "/main";
    } catch (err) {
      console.error(err.message);
    }
  };

   //your component needs to do something after render
   useEffect(() => {
    getBlockedRestaurants(currentUser);
  }, []);
 
  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <div id="about" class="tm-page-content">
    <div class="tm-black-bg tm-contact-text-container">
    <h2 class="tm-text-primary">Blocked restaurants</h2>
    <p>Here you can find your blocked restaurants.</p>
    </div>


    {/*<div id="restaurants" className="tm-tab-content">*/}
    
        <div className="tm-list">
        {restaurants.map(restaurant => (
        <div className="tm-list-item">
            <img src={restaurant.restimage} alt="Image" className="tm-list-item-img"/>
            <div className="tm-black-bg tm-list-item-text">
            <h3 className="tm-list-item-name"> {restaurant.rname}
            <span className="tm-list-item-price">
            <button onClick={() => handleDelete(restaurant.restid, currentUser)}
             style={{
              padding: '5px',
              fontSize: '20px',
            }}
            >
              <FontAwesomeIcon icon={faTrash}  style={{ color: '#099'}} />
            </button>  
            </span></h3>
            <p className="tm-list-item-description">{restaurant.description}</p>
            <p>Street: {restaurant.street}, City: {restaurant.city}, state: {restaurant.state}</p>
            <p>zip: {restaurant.zip}, phone: {restaurant.phone}</p>
            </div>
        </div>
        ))}
        </div>
    </div>
    
  );
};
/*=====  End of HTML  ======*/

export default BlockRestaurants;