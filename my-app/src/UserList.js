import React, { useState, useEffect } from 'react'
import axios from 'axios';
const UserList = () => {
    
  const [listOfUser, setlistOfUser] = useState([ ]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setlistOfUser(result.data);
      
    };
    fetchData();
    
  }, []);
  return (
      <div>
    <ul>
      {console.log(listOfUser)}
       {listOfUser.map(item => (
        <li key={item.id}> <b>Name :</b> {item.name}
        </li>
      ))} 
    </ul>
    </div>
  );
 }

export default UserList