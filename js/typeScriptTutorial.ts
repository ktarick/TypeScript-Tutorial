class User{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    isReviewer: boolean;
    isAdmin: boolean;
    active: boolean;
    constructor(){
    }
}

let user: User = new User();
user.id = 0;
user.username = "test";
user.firstname = "test"; 
user.lastname = "test";
user.email = "test";
user.phone = "test";
user.isReviewer = true;
user.isAdmin = true;
user.active = true;
console.log(user);