import React, { Fragment, useEffect,useState } from "react";
import {Rating, __esModule} from 'react-simple-star-rating'

//Image and videos
import image1 from "../../design/designPage/img/iced-americano.png";
import image2 from "../../design/designPage/img/hot-americano.png";
import image3 from "../../design/designPage/img/smoothie-1.png";

const SearchDrinks = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [description, setDescription] = useState("");
const [users, setUsers] = useState([]);
const [rating, setRating] = useState(0) 
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/

  //Get all the users
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/ServiDrink/allusers");
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  //your component needs to do something after render
  useEffect(() => {
    getUsers();
  }, []);
 

  /*=====  End of FUNCTIONS  ======*/
  
  

  //{users.map(user => (user.name))}
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <div id="drink" className="tm-page-content">
            <nav className="tm-black-bg tm-drinks-nav">
                <ul>
                <li>
                    <a href="#" className="tm-tab-link active" data-id="cold">Iced Coffee</a>
                </li>
                <li>
                    <a href="#" className="tm-tab-link" data-id="hot">Hot Coffee</a>
                </li>
                <li>
                    <a href="#" className="tm-tab-link" data-id="juice">Fruit Juice</a>
                </li>
                </ul>
            </nav>

            <div id="cold" className="tm-tab-content">
                {/*With users.map I can list all the restaurants */}
                {users.map(user => (
                <div className="tm-list">
                <div className="tm-list-item">
                    <img src={image1} alt="Image" className="tm-list-item-img"/>
                    <div className="tm-black-bg tm-list-item-text">
                    <h3 className="tm-list-item-name">{user.name}
                    <span className="tm-list-item-price">{user.email}</span></h3>
                     <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={20}
                        label
                        transition
                        fillColor='orange'
                        emptyColor='gray'
                        className='foo' // Will remove the inline style if applied
                    />
                    <p>rating: {rating}</p>
                    <p className="tm-list-item-description">Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.</p>
                    </div>
                </div>
                </div>
                ))}
            </div>

            <div id="hot" className="tm-tab-content">
                <div className="tm-list">
                <div className="tm-list-item">
                    <img src={image2} alt="Image" className="tm-list-item-img"/>
                    <div className="tm-black-bg tm-list-item-text">
                    <h3 className="tm-list-item-name">Hot Americano<span className="tm-list-item-price">$8.50</span></h3>
                    <p className="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>
                    </div>
                </div>
                </div>
            </div>

            <div id="juice" className="tm-tab-content">
                <div className="tm-list">
                <div className="tm-list-item">
                    <img src={image3} alt="Image" className="tm-list-item-img"/>
                    <div className="tm-black-bg tm-list-item-text">
                    <h3 className="tm-list-item-name">Strawberry Smoothie<span className="tm-list-item-price">$12.50</span></h3>
                    <p className="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
  );
};
/*=====  End of HTML  ======*/

export default SearchDrinks;