/*THIS DOCUMENT IS TO CREAE THE CONECTION WITH THE DATABASE */

const Pool = require("pg").Pool;

//Configuration
//Cambiar dependiendo de la clave de tu base de datos
const pool = new Pool({
	user: "postgres",
	//02468
	password: "02468",
	host: "localhost",
	port: 5432,
	database: "ServiDrink"
});

module.exports = pool;