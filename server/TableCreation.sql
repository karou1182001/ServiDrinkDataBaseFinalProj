CREATE TABLE Users(
	userid SERIAL PRIMARY KEY,
	name VARCHAR(50),
	password VARCHAR(10),
	type VARCHAR(10),
	phone BIGINT,
	email VARCHAR(50),
	street TEXT,
	city VARCHAR(50),
	state VARCHAR(50),
	zip INTEGER
);

CREATE TABLE Product(
	productid SERIAL PRIMARY KEY,
	name VARCHAR(100),
	description TEXT,
	ingredients VARCHAR(100)[],
	Rating REAL
);

CREATE TABLE Restaurant(
	restid SERIAL PRIMARY KEY,
	name varchar(100),
	phone BIGINT,
	street TEXT,
	city varchar(50),
	state varchar(50),
	zip INTEGER,
	description TEXT
);

CREATE TABLE Menu(
	productid SERIAL REFERENCES Product,
	restid SERIAL REFERENCES Restaurant,
	price REAL,
	CONSTRAINT mpk PRIMARY KEY(productid, restid)
);

--CREATE TABLE TopProducts(
--	productid SERIAL REFERENCES Product,
--	restid SERIAL REFERENCES Restaurant,
--	price REAL,
--	CONSTRAINT pk PRIMARY KEY(productid, restid)
--);

CREATE TABLE SavedProducts(
	userid SERIAL REFERENCES Users,
	productid SERIAL REFERENCES Product,
	CONSTRAINT spk PRIMARY KEY(userid,productid)
);

CREATE TABLE RatedProducts(
	userid SERIAL REFERENCES Users,
	productid SERIAL REFERENCES Product,
	rating REAL,
	CONSTRAINT rpk PRIMARY KEY(userid, productid)
);

CREATE TABLE SavedRestaurants(
	userid SERIAL REFERENCES Users,
	restid SERIAL REFERENCES Restaurant,
	CONSTRAINT srpk PRIMARY KEY(userid,restid)
);

CREATE TABLE RatedRestaurants(
	userid SERIAL REFERENCES Users,
	restid SERIAL REFERENCES Restaurant,
	rating REAL,
	CONSTRAINT rrpk PRIMARY KEY(userid,restid)
);

CREATE TABLE BlockedRestaurants(
	userid SERIAL REFERENCES Users,
	restid SERIAL REFERENCES Restaurant,
	CONSTRAINT bpk PRIMARY KEY(userid,restid)
);