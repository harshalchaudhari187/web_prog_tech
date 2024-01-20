import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../service/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
const AddUser = () => {

  const navigate=useNavigate();
  const[user,setUser]=useState({id:"",firstName:"",lastName:"",address:"",pincode:""});
  const location=useLocation();
useEffect(()=>{

  setUser(location.state.user);
  // UserService.getUser(location.state.id).then((result)=>{setUser(result.data);
  // console.log(result.data);}).catch((err)=>{
  //   console.log("ERROR",err);
  // });


},[])



  const handleFirstNameChange = (e) => {
    setUser({...user,"firstName":e.target.value});
  };

  const handleLastNameChange = (e) => {
    setUser({...user,"lastName":e.target.value});
  
  };

  const handleAddressChange = (e) => {
    setUser({...user,"address":e.target.value});
  
  };

  const handlePincodeChange = (e) => {
    setUser({...user,"pincode":e.target.value});
  
  };

  
const handleSubmit=(event)=>{

  event.preventDefault();

  UserService.editUser(user).then((result)=>{console.log("Updated Successfully"); navigate("/list");}).catch((err)=>{console.log("ERROR:" ,err);})
  
}
  

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={user.firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={user.lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={user.address}
            onChange={handleAddressChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            value={user.pincode}
            onChange={handlePincodeChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
