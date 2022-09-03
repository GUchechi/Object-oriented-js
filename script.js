class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, "just logged in");
    }
    logout(){
        console.log(this.name, "just logged out");
    }
}

let userOne = new User("uche@gmail.com", "Uche");
let userTwo = new User("godswill@gmail.com", "Godswill");

console.log(userOne.name)
console.log(userTwo)

userOne.login()
userTwo.logout()