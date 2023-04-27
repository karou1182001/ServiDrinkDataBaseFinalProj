import React, { Fragment, useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SavedProducts = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [products, setProducts] = useState([]);
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
  const getSavedProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/ServiDrink/savedProducts");
      const jsonData = await response.json();
      
      console.log(jsonData);

      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //Delete products

  const handleDelete = async (productid, userid) => {
    try {
      const body = { userid };
      const deleteproduct = await fetch(`http://localhost:5000/ServiDrink/SavedProduct/${productid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      setProducts(products.filter(product => product.productid !== productid));

      //window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

   //your component needs to do something after render
   useEffect(() => {
    getSavedProducts();
  }, []);
 
  /*=====  End of FUNCTIONS  ======*/
  
  

  
  /*=============================================
  =            HTML            =
  =============================================*/
  return (
    <div id="special" class="tm-page-content">
    <div class="tm-black-bg tm-contact-text-container">
    <h2 class="tm-text-primary">Saved products</h2>
    <p>Here you can find your favorites products.</p>
    </div>


    {/*<div id="product" className="tm-tab-special">*/}
    
        <div className="tm-list">
        {products.map(product => (
        <div className="tm-list-item">
            <img src={product.internetimage} alt="Image" className="tm-list-item-img"/>
            <div className="tm-black-bg tm-list-item-text">
            <h3 className="tm-list-item-name"> {product.pname}
            <span className="tm-list-item-price">
            <button onClick={() => handleDelete(product.productid, 1)}
             style={{
              padding: '5px',
              fontSize: '20px',
            }}
            >
              <FontAwesomeIcon icon={faTrash}  style={{ color: '#099'}} />
            </button>  
            </span></h3>
            <p className="tm-list-item-description">{product.description}</p>
            <p>Rating: {product.rating}</p>
            </div>
        </div>
        ))}
        </div>
        

    


    {/*<div class="tm-black-bg tm-contact-form-container tm-align-right">
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
    </div>*/}

</div>
    
  );
};
/*=====  End of HTML  ======*/

export default SavedProducts;