import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

const UserListing = () => {
    const[userarr,setUserarr]=useState([]);

  // Fetch user data from API or state
useEffect(()=>{
    fetch();

   
},[])

const fetch=()=>{

    UserService.getUserList().then((result)=>{setUserarr(result.data)}).catch((err)=>{console.log("ERROR:",err);})


}
const deleteUser=(id)=>{


    if(window.confirm("Are you want to delete?"))
    {
  
      UserService.deleteUser(id).then(()=>{fetch()}).catch((err)=>{console.log("ERROR",err)});
      
    }
  
  }

  return (
    <div>
      <h2>User Information</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userarr.map((user)=>(
            
  <tr key={user.id}>
  <td>{user.firstName}</td>
  <td>{user.lastName}</td>
  <td>{user.address}</td>
  <td>{user.pincode}</td>
  <td>

  <Link to={`/edit/${user.id}`} state={{user}}>
    <button className="btn btn-primary" >Edit</button></Link>
    &nbsp;&nbsp;
    &nbsp;
    <button className="btn btn-danger" onClick={(pid)=>(deleteUser(user.id))}>Delete</button>
   
  </td>
</tr>
          )

          )}
        
           
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
