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

//Insert restaurant
app.post("/ServiDrink/NewRestaurant", async (req, res) => {
    try {
        const {rname, restImage, phone, street, city, state, zip, description} = req.body;
        const newRestaurant = await pool.query("INSERT INTO Restaurant (rname, restImage, phone, street, city, state, zip, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *"
            , [rname, restImage, phone, street, city, state, zip, description]
    );

    res.json(newRestaurant.rows[0]);
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
        console.log(userid);
        const saveRest = await pool.query("INSERT INTO SavedRestaurants (userid, restid) VALUES($1, $2) RETURNING *"
            , [userid, restid]
        );

        res.json(saveRest.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.post("/ServiDrink/BlockRestaurant", async (req, res) => {
    try {
        const { userid, restid} = req.body;
        console.log(userid);
        const blockRest = await pool.query("INSERT INTO BlockedRestaurants (userid, restid) VALUES($1, $2) RETURNING *"
            , [userid, restid]
        );

        res.json(blockRest.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

app.post("/ServiDrink/SaveProduct", async (req, res) => {
    try {
        const { userid, productid} = req.body;
        const saveProd = await pool.query("INSERT INTO SavedProducts (userid, productid) VALUES($1, $2) RETURNING *"
            , [userid, productid]
        );

        res.json(saveProd.rows[0]);
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
        const allproducts= await pool.query("SELECT P.pname, P.productid, P.description, P.ingredients, P.rating, P.internetImage, t.rname, t.restid, t.price  FROM  Product AS P INNER JOIN (Restaurant NATURAL JOIN  Menu) As t on t.productid= P.productid");
        res.json(allproducts.rows);
    } catch (error) {
        console.error(err.message)
    }
});


//Get saved restaurants
app.post("/ServiDrink/getSavedRestaurants", async(req, res)=>{
    try {
        console.log("Holay");
        const { userid } = req.body;
        
        console.log(userid);
        const allrest= await pool.query("SELECT * FROM  Restaurant AS R INNER JOIN  (SavedRestaurants NATURAL JOIN Users) AS t on R.restid= t.restid and t.userid= $1"
        , [userid]);
        res.json(allrest.rows);
    } catch (error) {
        console.error(err.message)
    }
});

app.post("/ServiDrink/getBlockedRestaurants", async(req, res)=>{
    try {
        console.log("Holay");
        const { userid } = req.body;
        
        console.log(userid);
        const allrest= await pool.query("SELECT * FROM  Restaurant AS R INNER JOIN  (BlockedRestaurants NATURAL JOIN Users) AS t on R.restid= t.restid and t.userid= $1"
        , [userid]);
        res.json(allrest.rows);
    } catch (error) {
        console.error(err.message)
    }
});

app.get("/ServiDrink/savedProducts", async(req, res)=>{
    try {
        console.log("Holay");
        const { userid } = req.body;
        
        console.log(userid);
        const allprod= await pool.query("SELECT * FROM  Product AS P INNER JOIN  (SavedProducts NATURAL JOIN Users) AS t on P.productid= t.productid and t.userid= $1"
        , [userid]);
        res.json(allprod.rows);
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

//Get one restaurant
app.post("/ServiDrink/getOneRestaurant", async (req, res) => {
    try {
        const { rname, phone} = req.body;
        const newRestaurant = await pool.query("SELECT * FROM Restaurant WHERE rname= $1 and phone= $2"
            , [rname, phone]
    );
    res.json(newRestaurant.rows[0]);
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

app.delete("/ServiDrink/SavedRestaurant/:restid", async (req, res) => {
    try {
        const { restid } = req.params;
        const { userid} = req.body;
        console.log(userid);
        const deleteUser= await pool.query("DELETE FROM SavedRestaurants WHERE restid= $1 and userid= $2", [restid, userid]);
        res.json("Saved restaurant was deleted")
    } catch (er) {
        console.error(er.message);
    }
});

app.delete("/ServiDrink/BlockedRestaurant/:restid", async (req, res) => {
    try {
        const { restid } = req.params;
        const { userid} = req.body;
        console.log(userid);
        const deleteUser= await pool.query("DELETE FROM BlockedRestaurants WHERE restid= $1 and userid= $2", [restid, userid]);
        res.json("Blocked restaurant was deleted")
    } catch (er) {
        console.error(er.message);
    }
});

app.delete("/ServiDrink/SavedProduct/:productid", async (req, res) => {
    try {
        const { productid } = req.params;
        const { userid} = req.body;
        console.log(userid);
        const deleteUser= await pool.query("DELETE FROM SavedProducts WHERE productid= $1 and userid= $2", [productid, userid]);
        res.json("Saved product was deleted")
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