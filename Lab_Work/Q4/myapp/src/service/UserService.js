import { User } from "./User";


class UserService{
    constructor(){
        this.users=[new User("sam","jones","new york",12113),
        new User("dan","james","atlanta",123232),
        new User("lawerence","james","atlanta",3232)]
    }
    getallusers(){
        return this.users;
    
    }
    insertuser(p){
        this.users.push(new User(p.FirstName,p.lastName,p.address,p.pincode))

    }
   deleteuser(firstName){
        console.log("in delete user in user service");
       let pos=this.users.findIndex(p=>p.FirstName===firstName);
       this.users.splice(pos,1);
       console.log(this.users);
   }
   updateuser(p){
    let pos=this.users.findIndex(p1=>p1.FirstName===p);
    this.users.splice(pos,1,new User((p.FirstName,p.lastName,p.address,p.pincode)));
   }
}
export default new UserService();