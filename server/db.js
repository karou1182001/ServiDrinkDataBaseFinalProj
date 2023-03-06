const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "02468",
	host: "localhost",
	port: 5432,
	database: "ServiDrink"
});

module.exports = pool;