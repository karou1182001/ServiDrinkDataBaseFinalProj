CREATE TABLE Users(
	userid SERIAL PRIMARY KEY,
	name VARCHAR(50),
	password VARCHAR(50),
	type VARCHAR(50),
	phone BIGINT,
	email VARCHAR(50),
	street TEXT,
	city VARCHAR(50),
	state VARCHAR(50),
	zip INTEGER
);

CREATE TABLE Product(
	productid SERIAL PRIMARY KEY,
	internetimage TEXT,
	Pname VARCHAR(100),
	description TEXT,
	ingredients VARCHAR(100)[],
	rating REAL
);


CREATE TABLE Restaurant(
	restid SERIAL PRIMARY KEY,
	rname varchar(100),
	restImage TEXT, 
	phone BIGINT,
	street TEXT,
	city varchar(50),
	state varchar(50),
	zip INTEGER,
	description TEXT
);

CREATE TABLE Menu(
	productid SERIAL REFERENCES Product ON DELETE CASCADE,
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

--INSERT INTO Restaurant (rname, phone, street, city, state, zip, description) VALUES('o', 8526272620, 'e B Downs', 'Tampa', 'FL', 33412, 'Ss');
--INSERT INTO Restaurant (rname, phone, street, city, state, zip, description) VALUES('BayCofee', 8526272620, 'e B Downs', 'Tampa', 'FL', 33412, 'Ss');

--INSERT INTO Product VALUES ('Ice vanilla Latte', 'A vanilla iced latte is espresso or strong brewed coffee that is chilled over ice and sweetened with a touch of cream and vanilla syrup.', 'Coffee, milk and Vanilla', 4);