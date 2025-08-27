# 🍹 ServiDrink Database – Final Project  

ServiDrink is a full-stack web application that allows users to explore and manage information about drinks served by local restaurants.  

With ServiDrink, users can:  
- 🔍 Search for registered restaurants to view their drink offerings  
- 🔎 Search for a specific drink and see which restaurants serve it  
- ⭐ Rate products and share feedback visible to all users  
- 💾 Save restaurants and products for quick access and updates  
- 🚫 Block restaurants so they no longer appear in searches  

This project was built with the **PERN stack**:  
- **PostgreSQL** – Database  
- **Express.js** – Server framework  
- **React.js** – Frontend  
- **Node.js** – Runtime environment  

---

## 🚀 Features
- Account creation for both **users** and **restaurants**  
- Search drinks or restaurants with filter options  
- Rate drinks and see community reviews  
- Save favorite drinks/restaurants for quick access  
- Block restaurants from appearing in results  

---

## 🛠️ Installation & Setup  

### Prerequisites
- [Node.js](https://nodejs.org/)  
- [PostgreSQL & PgAdmin](https://www.postgresql.org/)  

### Steps  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/karou1182001/ServiDrinkDataBaseFinalProj.git
   cd ServiDrinkDataBaseFinalProj
   ```
2. **Install dependencies**
In both client and server folders, run:

```bash
npm install
```

3. **Install backend dependencies**
```bash
npm install express pg cors
```

4. **Install nodemon (for hot-reload on backend)**
```bash
npm install -g nodemon
```
5. **Set up the database**
Create a database named ServiDrink in PostgreSQL.
- Run the provided SQL scripts:
   -TableCreation.sql
   - databasesq.sql

6. **Configure database connection**
Modify the db.js file in the server folder to match your local PostgreSQL credentials.
---
## ▶️ Running the App

- Start the backend (server):
```bash
cd server
nodemon index
```

- Start the frontend (client):
```bash
cd client
npm start
```

## 📸 Screenshots

1. Creation of an account as User

   ![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/30760882-a0a1-4791-912b-79dee31e44a9)

2. Creation of account as restaurant

   ![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/fa8ccd1a-4398-4de9-8d58-283861d68aea)

3. Login
![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/2f24a482-cf3d-4d55-a632-50a8d398d132)

4. Main menu users
  ![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/d36dae57-eeb2-48d2-8750-f6f32783c9f4)

5. Filter option
 ![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/7ba936b4-e092-47b7-9b47-89407745be03)

6. Menu of saved products

   ![image](https://github.com/karou1182001/ServiDrinkDataBaseFinalProj/assets/54915677/a26ac30a-1937-4662-b0b0-943d84c9ec49)


## 👥 Team Notes

- Backend: Node.js + Express + PostgreSQL
- Frontend: React.js
- Database Management: PgAdmin

---
#To Initialize:
1. Install NodeJS, PgAdmin(Postgress)

2. Add NodeJS to the path

3. In The external file, in the client and server folders
npm install 

4. npm i express pg cors

5. Install nodemon in order to not restart the app when you do changes
npm install -g nodemon

6. Create a ServiDrink database in postgress and run the TableCreation.sql and dataasesq.sql

7. Modify db.js file to match the permissions to your particular database
