import React, { Fragment, useEffect,useState } from "react";
import {Rating, __esModule} from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



//Image and videos
import image2 from "../../design/designPage/img/hot-americano.png";
import image3 from "../../design/designPage/img/smoothie-1.png";

const SearchDrinks = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [description, setDescription] = useState("");
const [products, setProducts] = useState([]);
const [rating, setRating] = useState(0) 
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/

  //Get all the products
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/ServiDrink/allproducts");
      const jsonData = await response.json();
      
      console.log(jsonData);

      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleRating = async (rate, productId) => {
    setRating(rate);
    await updateRating(productId, rate);
  };

  //Edit rating
  const updateRating = async (productId, rate) => {
    try {
      console.log(rate)
      const body = { rate };
      const response = await fetch(
        `http://localhost:5000/ServiDrink/UpdateProduct/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
     const data = await response.json();
     console.log(data); // Log the response data to the console
    } catch (err) {
      console.error(err.message);
    }
  };

  //your component needs to do something after render
  useEffect(() => {
    getProducts();
  }, []);
 

  /*=====  End of FUNCTIONS  ======*/
  
  

  //{products.map(product => (product.name))}
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
                {/*With products.map I can list all the restaurants */}
                {products.map(product => (
                <div className="tm-list">
                <div className="tm-list-item">
                    <img src={product.internetimage} alt="Image" className="tm-list-item-img"/>
                    <div className="tm-black-bg tm-list-item-text">
                    <h3 className="tm-list-item-name">{product.pname}
                    <span className="tm-list-item-price">{product.price}</span></h3>
                     <Rating
                        onClick={(rate) => handleRating(rate, product.productid)}
                        ratingValue={rating}
                        initialValue={product.rating}
                        size={20}
                        label
                        transition
                        fillColor='orange'
                        emptyColor='gray'
                        className='foo' // Will remove the inline style if applied
                    />
                    <p className="tm-list-item-description">{product.description}</p>
                    <p>Restaurant: {product.rname}</p>
                    <button className="link-btn" onClick={() => alert("Hola")}>Save restaurant</button>
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