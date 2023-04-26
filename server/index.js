const express = require("express");
const app = express(); //Run 
const cors = require("cors");
const pool = require("./db");

/**************CONECTION DATABASE METHODS*************** */
//middleware
app.use(cors()); //Cross origin resource sharing
app.use(express.json());

//Initialize port to listen
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

//*************ROUTES AND DATABASE METHODS***************

/*------------------INSERTION------------------------- */
app.post("/ServiDrink/NewUser", async (req, res) => {
    try {
        const {name, phone, email, street, city, state, zip, password, type} = req.body;
        const newUser = await pool.query("INSERT INTO Users (name, phone, email, street, city, state, zip, password, type) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *"
            , [name, phone ,email, street, city, state, zip, password, type]
    );

    res.json(newUser.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.post("/ServiDrink/NewProduct", async (req, res) => {
    try {
        const { name, description, ingredients, rating } = req.body;
        const newProduct = await pool.query("INSERT INTO Product (name, description, ingredients, rating) VALUES($1, $2, $3, $4) RETURNING *"
            , [name, description, ingredients, rating]
        );

        res.json(newProduct.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.post("/ServiDrink/NewRestaurant", async (req, res) => {
    try {
        const { name, phone, street, city, state, zip, description } = req.body;
        const newRestaurant = await pool.query("INSERT INTO Restaurant (name, phone, street, city, state, zip, description) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *"
            , [name, phone, street, city, state, zip, description]
        );

        res.json(newRestaurant.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.post("/ServiDrink/SaveRestaurant", async (req, res) => {
    try {
        const { userid, restid} = req.body;
        const saveRest = await pool.query("INSERT INTO SavedRestaurants (userid, restid) VALUES($1, $2) RETURNING *"
            , [userid, restid]
        );

        res.json(saveRest.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

/*------------------GETTING VALUES------------------------- */
//Get all values
app.get("/ServiDrink/allusers", async(req, res)=>{
    try {
        const allusers= await pool.query("SELECT * FROM users");
        res.json(allusers.rows);
    } catch (error) {
        console.error(err.message)
    }
});

//Get all products
app.get("/ServiDrink/allproducts", async(req, res)=>{
    try {
        //
        //SELECT Pname, description, ingredients, rating, Rname, price  FROM Restaurant NATURAL JOIN Menu NATURAL JOIN Product
        const allproducts= await pool.query("SELECT P.pname, P.productid, P.description, P.ingredients, P.rating, P.internetImage, t.rname, t.price  FROM  Product AS P INNER JOIN (Restaurant NATURAL JOIN  Menu) As t on t.productid= P.productid");
        res.json(allproducts.rows);
    } catch (error) {
        console.error(err.message)
    }
});


//Get saved restaurants
app.get("/ServiDrink/savedRestaurants", async(req, res)=>{
    try {
        const allusers= await pool.query("SELECT * FROM  Restaurant AS R INNER JOIN  (SavedRestaurants NATURAL JOIN Users) AS t on R.restid= t.restid");
        res.json(allusers.rows);
    } catch (error) {
        console.error(err.message)
    }
});

//Get one user
app.post("/ServiDrink/getUser", async (req, res) => {
    try {
        const { email, password} = req.body;
        const newUser = await pool.query("SELECT * FROM users WHERE email= $1 and password= $2"
            , [email, password]
    );
    res.json(newUser.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.get("/ServiDrink/getRestaurants", async (req, res) => {
    try {
        const allRestaurants = await pool.query("SELECT * FROM Restaurant")
        res.json(allRestaurants.rows)
    } catch (er) {
        console.error("ERROR IN getRestaurants");
        console.error(er.message);
    }
});

app.post("/ServiDrink/getUserRestaurant", async (req, res) => {
    try {
        const {userid} = req.body;
        const allRestaurants = await pool.query("SELECT * FROM Restaurant, Owns WHERE Owns.userid = $1", [userid])
        res.json(allRestaurants.rows)
    } catch (er) {
        console.error("ERROR IN getUserRestaurant");
        console.error(er.message);
    }
});

app.post("/ServiDrink/getMenu",  async (req, res) => {
    try {
        const {restid} = req.body;
        const allRestaurants = await pool.query("SELECT * FROM Restaurant, Owns WHERE Owns.userid = $1", [restid])
        res.json(allRestaurants.rows)
    } catch(err) {
        console.error("ERROR IN getMenu");
        console.error(er.message);
    }
});

app.get("/ServiDrink/getProducts", async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM Product")
        res.json(allProducts.rows)
    } catch (er) {
        console.error("ERROR IN getProducts");
        console.error(er.message);
    }
});

//Get one by name
/*app.get("/ServiDrink/:id", async(req, res)=>{
    try {
        const { id }= req.params; 
        const oneUser= await pool.query("SELECT * FROM users WHERE email= $1", [id]);
        res.json(oneUser.rows[0]);
    } catch (error) {
        console.error(err.message)
    }
});*/

/*------------------UPDATING------------------------- */
//Update User info
app.put("/ServiDrink/:userid", async (req, res) => {
    try {
        const { userid } = req.params;
        const { name} = req.body;
        //const { name, phone, email, street, city, state, zip } = req.body;
        //"a", 322, "sebas@g", "1234", "Baq", "FL", 32578
        const updateUser = await pool.query("UPDATE Users SET name = $1, phone = $2, email = $3, street = $4, city = $5, state = $6, zip = $7, password= $8, type= $9 WHERE userid = $10",
        [name, 322, "sebas@g", "1234", "Baq", "FL", 32578, "1", "normal", userid]
        //[name, phone, email, street, city, state, zip, userid]
        );

        res.json("User info updated");
    } catch (er) {
        console.error(er.message);
    }
});

//Update rating
app.put("/ServiDrink/UpdateProduct/:productid", async (req, res) => {
    try {

        const { productid } = req.params;
        const { rate} = req.body;
    
        const updateUser = await pool.query("UPDATE Product SET rating = $1 WHERE productid = $2",
        [rate, productid]
        );

        res.json("Product info updated");
    } catch (er) {
        console.error(er.message);
    }
});

/*------------------DELETING------------------------- */
app.delete("/ServiDrink/:userid", async (req, res) => {
    try {
        const { userid } = req.params;
        const deleteUser= await pool.query("DELETE FROM users WHERE userid= $1", [userid]);
        res.json("User was deleted")
    } catch (er) {
        console.error(er.message);
    }
});




/*PRUEBA

{
  "name" : "Maria", 
  "phone" : "35267844", 
  "email" : "maria2@h.c",
  "street": "123433 Bruce", 
  "city": "Tampa", 
  "state": "FL", 
  "zip": "33612"
  
} */