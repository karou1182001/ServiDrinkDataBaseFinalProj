import React, { Fragment, useState } from "react";
//Image and videos
import image1 from "../../design/designPage/img/iced-americano.png";
import image2 from "../../design/designPage/img/hot-americano.png";
import image3 from "../../design/designPage/img/smoothie-1.png";

const SavedRestaurants = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [description, setDescription] = useState("");
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
 

  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <div id="contact" class="tm-page-content">
    <div class="tm-black-bg tm-contact-text-container">
    <h2 class="tm-text-primary">Contact Wave</h2>
    <p>Wave Cafe Template has a video background. You can use this layout for your websites. Please contact Tooplate's Facebook page. Tell your friends about our website.</p>
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