import React, {useState,useEffect} from "react";
// py-4 for padding
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [users,setUser] =useState([]);

    useEffect(()=>{
        loadUsers();

     },[]);

    const loadUsers = async ()=>{
        const result =await axios.get("http://localhost:3003/users");
     setUser(result.data.reverse())
    };

    const deleteUser = async id =>{
        await  axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    };

    return(
        <div className="container">
            <div className="py-4"> 
            <h1>Home page</h1>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th >Actions</th>
    </tr>
  </thead> 
  <tbody class="table-group-divider">
       {
        users.map((user, index) =>(
            <tr>
                <th scope="row"> {index +1}</th>
                <td>{user.name} </td>
                <td>{user.username} </td>
                <td>{user.email} </td>

                <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`} style={{ marginRight: "8px" }} >View</Link>
                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`} style={{ marginRight: "8px" }}>Edit</Link>
                    <Link className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</Link>
                </td>
            </tr>
        ))
       }
  </tbody>
</table>

            </div>
        </div>
    )
}


export default Home;