import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddUser = () =>{
    const navigate = useNavigate(); // Use useNavigate hook
    const [user ,setUser] = useState({
            name : "",
            username: "",
            email: "",
            phone:"",
            website:""

        });
    
    const {name,username,email,phone,website} =user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigate("/"); // Use navigate to navigate to the desired route
    };

    return(
      <div className="container text-center ">
        <div className="w-75 mx-auto shadow p-5">
            <h1 className="text-center mb-4">Add Users</h1>
        <form onSubmit={e=> onSubmit(e)}> 
        <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={e=>onInputChange(e)}
            />

        </div><br/>

        <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your UserName"
            name="username"
            value={username}
            onChange={e=>onInputChange(e)}

            />

        </div><br/>

        <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Email Id"
            name="email"
            value={email}
            onChange={e=>onInputChange(e)}

            />

        </div><br/>

        <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Phone Number"
            name="phone"
            value={phone}
            onChange={e=>onInputChange(e)}

            />

        </div><br/>

        <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Website Name "
            name="website"
            value={website}
            onChange={e=>onInputChange(e)}

            />

        </div><br/>
        <button className="btn btn-primary btn-block ">Add User</button>
        </form>
        </div>
      </div>
        )
}

export default AddUser;