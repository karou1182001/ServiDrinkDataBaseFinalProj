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