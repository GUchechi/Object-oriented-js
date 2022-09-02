class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

let userOne = new User("uche@gmail.com", "Uche");
let userTwo = new User("godswill@gmail.com", "Godswill");

console.log(userOne, userTwo);