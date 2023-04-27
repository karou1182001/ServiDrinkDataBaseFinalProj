import React, { Fragment, useEffect,useState } from "react";
import {Rating, __esModule} from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchDrinks = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [description, setDescription] = useState("");
const [products, setProducts] = useState([]);
const [rating, setRating] = useState(0);
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState(""); 
const [restaurants, setRestaurants] = useState([]);
const currentUser = localStorage.getItem("currentUser");
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
      setFilteredData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //Save  restaurant
  const saveRestaurant= async (restid) => {
        try {
          const body = { 
            "userid" : currentUser, 
            "restid" : restid}
            const response = await fetch("http://localhost:5000/ServiDrink/SaveRestaurant", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          window.location = "/main";
    
        } catch (err) {
          console.error(err.message);
        }
  };

  //Block  restaurant
  const blockRestaurant= async (restid) => {
    try {
      const body = { 
        "userid" : currentUser, 
        "restid" : restid}
        const response = await fetch("http://localhost:5000/ServiDrink/BlockRestaurant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/main";

    } catch (err) {
      console.error(err.message);
    }
};

  //Save  Product
  const saveProduct= async (productid) => {
    try {
      const body = { 
        "userid" : "1", 
        "productid" : productid}
        const response = await fetch("http://localhost:5000/ServiDrink/SaveProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/main";

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

  const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = products.filter((value) => {
			return value.pname.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord == "") {
			setFilteredData(products);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData(products);
		setWordEntered("");
	}

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
            <nav className="tm-black-bg tm-drinks-nav searchInputs">
				        <input type="text" placeholder={'Enter a product name...'} value={wordEntered} onChange={ handleFilter} />
				        <div className="searchIcon">
					          {wordEntered.length == 0 ?
						            (< SearchIcon />)
						            :
						            (<CloseIcon id="clearBtn" onClick={clearInput } />)}
				        </div>
            </nav>

            <div id="cold" className="tm-tab-content">
                {/*With products.map I can list all the products */}
                {filteredData.map(product => (
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
                    <button className="link-btn" onClick={() => saveRestaurant(product.restid)}
                    style={{
                    padding: '5px',
                    fontSize: '20px',
                   }}
                   >
                   <FontAwesomeIcon icon={faSave}  style={{ color: '#099'}} />
                      </button>
                    <button className="link-btn" onClick={() => saveProduct(product.productid)}
                    style={{
                    padding: '5px',
                    fontSize: '20px',
                   }}
                   >
                   <FontAwesomeIcon icon={faHeart}  style={{ color: '#099'}} />
                      </button>
                      <button className="link-btn" onClick={() => blockRestaurant(product.restid)}
                    style={{
                    padding: '5px',
                    fontSize: '20px',
                   }}
                   >
                   <FontAwesomeIcon icon={faBan}  style={{ color: '#099'}} />
                      </button>
                    </div>
                </div>
                </div>
                ))}
            </div>
    </div>
  );
};
/*=====  End of HTML  ======*/

export default SearchDrinks;