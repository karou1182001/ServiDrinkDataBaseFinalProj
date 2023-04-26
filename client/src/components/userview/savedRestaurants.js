import React, { Fragment, useEffect,useState } from "react";
//Image and videos
import image1 from "../../design/designPage/img/iced-americano.png";
import image2 from "../../design/designPage/img/hot-americano.png";
import image3 from "../../design/designPage/img/smoothie-1.png";

const SavedRestaurants = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [restaurants, setRestaurants] = useState([]);
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
  const getSavedRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:5000/ServiDrink/savedRestaurants");
      const jsonData = await response.json();
      
      console.log(jsonData);

      setRestaurants(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

   //your component needs to do something after render
   useEffect(() => {
    getSavedRestaurants();
  }, []);
 
  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <div id="contact" class="tm-page-content">
    <div class="tm-black-bg tm-contact-text-container">
    <h2 class="tm-text-primary">Save restaurants</h2>
    <p>Here you can find your favorites krestaurants.</p>
    </div>


    {/*<div id="restaurants" className="tm-tab-content">*/}
    
        <div className="tm-list">
        {restaurants.map(restaurant => (
        <div className="tm-list-item">
            <img src={"https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"} alt="Image" className="tm-list-item-img"/>
            <div className="tm-black-bg tm-list-item-text">
            <h3 className="tm-list-item-name"> {restaurant.rname}
            <span className="tm-list-item-price">delete</span></h3>
            <p className="tm-list-item-description">{restaurant.description}</p>
            <p>Street: {restaurant.street}, City: {restaurant.city}, state: {restaurant.state}</p>
            <p>zip: {restaurant.zip}, phone: {restaurant.phone}</p>
            </div>
        </div>
        ))}
        </div>
        

    


     <div class="tm-black-bg tm-contact-form-container tm-align-right">
    <form action="" method="POST" id="contact-form">
        <div class="tm-form-group">
        <input type="text" name="name" class="tm-form-control" placeholder="Name" required="" />
        </div>
        <div class="tm-form-group">
        <input type="email" name="email" class="tm-form-control" placeholder="Email" required="" />
        </div>        
        <div class="tm-form-group tm-mb-30">
        <textarea rows="6" name="message" class="tm-form-control" placeholder="Message" required=""></textarea>
        </div>        
        <div>
        <button type="submit" class="tm-btn-primary tm-align-right">
            Submit
        </button>
        </div>
    </form>
    </div>

</div>
    
  );
};
/*=====  End of HTML  ======*/

export default SavedRestaurants;