import React, {useState, useEffect} from 'react';
import SearchBar from "./searchBar";
function Search() {
    const [users, setUsers] = useState([]);
    const ProductData = async () => {
        try {
          const response = await fetch("http://localhost:5000/ServiDrink/allusers");
          const jsonData = await response.json();

           setUsers(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(() => {
        ProductData();
    }, []);
    return (
        <div className="Search">
            <SearchBar placeholder="Enter a Product Name..." data={users} />
        </div>
    );
}
export default Search;