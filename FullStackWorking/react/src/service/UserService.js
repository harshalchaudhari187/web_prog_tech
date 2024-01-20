import axios from 'axios';
let baseurl="http://localhost:9090/"

class userService{

    

getUserList(){
   // return productarr;
   return axios.get(baseurl+"users");
}




addUser(user){

    //productarr.push(prod);
    return axios.post(baseurl+`users/user`,user);
}

getUser(id){
    return axios.get(baseurl+`users/user/${id}`);
}

deleteUser(id)
{
   

    return axios.delete(baseurl+`users/user/${id}`)
    
    
}
editUser(user){
    return axios.put(baseurl+`users/user/${user.id}`,user);
}

}
export default new userService();