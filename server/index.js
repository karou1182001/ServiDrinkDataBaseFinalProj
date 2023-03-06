const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

//ROUTES

//Create a User
app.post("/ServiDrink", async (req, res) => {
    try {
        const {name, phone, email, street, city, state, zip} = req.body;
        //"a", 322, "sebas@g", "1234", "Baq", "FL", 32578
        const newUser = await pool.query("INSERT INTO Users (name, phone, email, street, city, state, zip) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *"
            , [name, phone ,email, street, city, state, zip]
    );

    res.json(newUser.rows[0]);
    } catch (er) {
        console.error(er.message);
    }
});

//Update User info

app.put("/ServiDrink/:userid", async (req, res) => {
    try {
        const { userid } = req.params;
        const { name, phone, email, street, city, state, zip } = req.body;
        //"a", 322, "sebas@g", "1234", "Baq", "FL", 32578
        const updateUser = await pool.query("UPDATE Users SET name = $1, phone = $2, email = $3, street = $4, city = $5, state = $6, zip = $7 WHERE userid = $8",
            [name, phone, email, street, city, state, zip, userid]
        );

        res.json("User info updated");
    } catch (er) {
        console.error(er.message);
    }
});