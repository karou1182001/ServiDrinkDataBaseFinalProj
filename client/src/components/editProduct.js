import React, { Fragment, useEffect, useState } from "react";

const EditProduct = ({ productid, restid }) => {
  /*=============================================
  =            VARIABLES            =
  =============================================*/
  const [product, setProduct] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState();
  const [path, setPath] = useState();

  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
    const getProduct = async (productid, restid) => {
        try {
            const body = { productid };
            const response = await fetch(
            "http://localhost:5000/ServiDrink/getProduct",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
            );

            const data = await response.json()
            
            setProduct(data)
            setDescription(data['description'])
            setIngredients(data['ingredients'])
            setPath(data['internetimage'])
            setName(data['pname']);

        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getProduct(productid);
    }, []);


  const updateProduct = async e => {
    //e.preventDefault()
    try {
        let ingredient = '{' + ingredients.toString() + '}'
        const b = { name, description, ingredient, path, price, productid };
        JSON.stringify(b)
        console.log(restid)
        const response = await fetch(
          `http://localhost:5000/ServiDrink/UpdateMenu/${restid}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(b)
          }
        );
  
        window.location = "/manage";
        
      } catch (err) {
        console.error(err.message);
      }
  }

  

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${productid}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      {/*Show box */}
      <div
        className="modal"
        id={`id${productid}`}
      >
        <div className="modal-dialog" style={{color: "black"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Product</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              Name:
              <input
                type="text"
                className="form-control"
                defaultValue={name}
                onChange={e => setName(e.target.value)}
              />
              Description:
              <input
                type="text"
                className="form-control"
                defaultValue={description}
                onChange={e => setDescription(e.target.value)}
              />
              Ingredients:
              <input
                type="text"
                className="form-control"
                defaultValue={ingredients}
                onChange={e => setIngredients(e.target.value)}
              />
              Price:
              <input
                type="text"
                className="form-control"
                defaultValue={price}
                onChange={e => setPrice(e.target.value)}
              />
              Internet image path:
              <input
                type="text"
                className="form-control"
                defaultValue={path}
                onChange={e => setPath(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateProduct(e.target.value)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProduct;