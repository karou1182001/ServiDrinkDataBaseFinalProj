CREATE TABLE User(
	userid INTEGER PRIMARY KEY,
	name VARCHAR(50),
	phone BIGSERIAL,
	email VARCHAR(50),
	street TEXT,
	city VARCHAR(50),
	state VARCHAR(50),
	zip INTEGER
);

CREATE TABLE Product(
	productid INTEGER PRIMARY KEY,
	name VARCHAR(100),
	description TEXT,
	ingredients VARCHAR(100) ARRAY,
	Rating REAL
);

CREATE TABLE Restaurant(
	restid INTEGER PRIMARY KEY,
	name varchar(100),
	phone BIGSERIAL,
	street TEXT,
	city varchar(50),
	state varchar(50),
	zip INTEGER,
	description TEXT
);

CREATE TABLE Menu(
	productid INTEGER REFERENCES Product,
	restid INTEGER REFERENCES Restaurant,
	price REAL,
	ADD CONSTRAINT pk PRIMARY KEY(productid, restid)
);

--CREATE TABLE TopProducts(
--	productid INTEGER REFERENCES Product,
--	restid INTEGER REFERENCES Restaurant,
--	price REAL,
--	ADD CONSTRAINT pk PRIMARY KEY(productid, restid)
--);

CREATE TABLE SavedProducts(
	userid INTEGER REFERENCES User,
	productid INTEGER REFERENCES Product,
	ADD CONSTRAINT pk PRIMARY KEY(userid,productid)
);

CREATE TABLE RatedProducts(
	userid INTEGER REFERENCES User,
	productid INTEGER REFERENCES Product,
	rating REAL
	ADD CONSTRAINT pk PRIMARY KEY(userid,productid)
);

CREATE TABLE SavedRestaurants(
	userid INTEGER REFERENCES User,
	restid INTEGER REFERENCES Restaurant,
	ADD CONSTRAINT pk PRIMARY KEY(userid,restid)
);

CREATE TABLE RatedRestaurants(
	userid INTEGER REFERENCES User,
	restid INTEGER REFERENCES Restaurant,
	rating REAL,
	ADD CONSTRAINT pk PRIMARY KEY(userid,restid)
);

CREATE TABLE BlockedRestaurants(
	userid INTEGER REFERENCES User,
	restid INTEGER REFERENCES Restaurant,
	ADD CONSTRAINT pk PRIMARY KEY(userid,restid)
);