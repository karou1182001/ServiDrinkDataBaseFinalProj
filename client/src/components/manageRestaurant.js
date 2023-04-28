import React, { Fragment, useEffect, useState } from "react";
import video from "../design/designPage/video/wave-cafe-video-bg.mp4";
import EditProduct from "./editProduct.js"
//Image and videos
const ManageRestaurant = () => {

/*=============================================
=            VARIABLES            =
=============================================*/
const [menu, setMenu] = useState([]);
  //useState show the default value
/*=====  End of VARIABLES  ======*/


  
  
  /*=============================================
  =            FUNCTIONS            =
  =============================================*/

    const getMenu = async restid => {
        try {
          const body = {restid}
          const response = await fetch("http://localhost:5000/ServiDrink/getMenuProducts",
        {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
        });
          const jsonData = await response.json();

          setMenu(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

    const deleteProduct = async (productid, restid) => {
      try {
        const deleteuser = await fetch(`http://localhost:5000/ServiDrink/Menu/${productid}`, {
          method: "DELETE"
        });
  
        getMenu(restid)
      } catch (err) {
        console.error(err.message);
      }
    }

    const newProduct = async restid => {
      try {
        let newName = 'product'
        let newDesc = 'description'
        let newIng = 'ingredients'
        let newRating = 0.0
        const body = { newName, newDesc, newIng, newRating }
        const response = await fetch("http://localhost:5000/ServiDrink/NewProduct",
      {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
      });
      const jsonData = await response.json();

      console.log(jsonData['productid'])
      let pid = jsonData['productid']
      let newPrice = 0.0
      const mbody = { restid, pid, newPrice }
      console.log(JSON.stringify(mbody))
      const mresponse = await fetch("http://localhost:5000/ServiDrink/AddToMenu",
    {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mbody)
    });
    const mjsonData = await mresponse.json();

    getMenu(restid)
      } catch (err) {
        console.error(err.message);
      }
    }

      useEffect(() => {
        getMenu(parseInt(localStorage.getItem("currentRestaurant")));
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
                    <th>Description</th>
                    <th>Ingredients</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
              {menu.map(product =>(
                <tr>
                  <td>{product.pname}</td>
                  <td>{product.description}</td>
                  <td>{product.ingredients}</td>
                  <td>${product.price}</td>
                  <td><EditProduct productid={product.productid} restid={localStorage.getItem("currentRestaurant")} /></td>
                  <td><button className="btn btn-danger" onClick={() => deleteProduct(product.productid, localStorage.getItem("currentRestaurant"))}>Remove</button></td>
                </tr>
              ))}
            </tbody>
        </table>
        <button className="btn btn-success" onClick={() => newProduct(localStorage.getItem("currentRestaurant"))}>Add New Product</button>
      </div>
    </Fragment>
  );
};
/*=====  End of HTML  ======*/

export default ManageRestaurant;