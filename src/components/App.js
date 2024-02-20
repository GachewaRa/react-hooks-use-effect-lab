// App.js
import React, { useState, useEffect } from "react";
import Users from "./Users";
import AddUserForm from "./AddUserForm";
import SearchUsers from "./SearchUsers";
import SortUsers from "./SortUsers";

function App() {
  
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState("login");

  useEffect(() => {
    // Fetch data from the GitHub API
    fetch("https://api.github.com/search/users?q=dog")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        
        setFilteredData(data.items);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleAddUser = (newUser) => {
    // Use the callback function to ensure you get the latest state
    setFilteredData((prevUserData) => {
      // Combine the previous state with the new user
      const updatedUserData = [...prevUserData, newUser];
    
      // Log the updated state
      console.log(updatedUserData);
  
      // Return the updated state
      return updatedUserData;
    });
  };
  
  

  const handleSearch = (searchTerm) => {
    const filteredUsers = filteredData.filter(user =>
      user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredUsers);
  };

  const handleSort = (option) => {
    // Set the sort option in the state
    setSortOption(option);
    let sortedUsers
  if (option==="id"){
    // Create a new array with the current filtered data
     sortedUsers = [...filteredData].sort((a, b) => a[option] - b[option]);
  } else {
    sortedUsers = [...filteredData].sort((a, b) =>
      a[option].localeCompare(b[option]));
  }
    // Update the state with the sorted array
    setFilteredData(sortedUsers);
  };
  
  
  

  const handleDelete = (id) => {
    const updatedUsers = filteredData.filter(user => user.id !== id);
    setFilteredData(updatedUsers);
  };

  return (
    <div className="App">
      <h2>GitHub Users</h2>
      <AddUserForm onAddUser={handleAddUser}/>
      <SearchUsers onSearch={handleSearch} />
      <SortUsers onSort={handleSort} />
      <Users users={filteredData} onDelete={handleDelete} />
    </div>
  );
}

export default App;
