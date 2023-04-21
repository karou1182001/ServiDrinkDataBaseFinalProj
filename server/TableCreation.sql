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

CREATE TABLE Owns(
	userid SERIAL REFERENCES Users,
	restid SERIAL REFERENCES Restaurant,
	CONSTRAINT opk PRIMARY KEY(userid,restid)
);

--INSERT INTO Restaurant (name, phone, street, city, state, zip, description) VALUES ("Starbucks", 8526272620, "1273 Bruce B Downs", "Tampa", "FL", 33412, "Starbucks Corp (Starbucks) is a specialty coffee retailer. It roasts, markets, and retails specialty coffee. The company, through its stores, offers several blends of coffee, handcrafted beverages, merchandise, and food items.");
--INSERT INTO Restaurant VALUES ("Bay Coffee", 8327727272, "1726 Fletcher Av", "Tampa", "FL", 33526, "We Roast The Richest, Most Flavorful Coffees & Strive To Make The World A Better Place.");


--INSERT INTO Product VALUES ("Ice vanilla Latte", "A vanilla iced latte is espresso or strong brewed coffee that is chilled over ice and sweetened with a touch of cream and vanilla syrup.", "Coffee, milk and Vanilla", 4);