class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.age = 0;
    }
    login(){
        console.log(this.email, "just logged in");
        this;
    }
    logout(){
        console.log(this.name, "just logged out");
        this;
    }
    updateAge(){
        this.age ++;
        console.log(this.name, "is now" , this.age, "old" );
        this;
    }
}

let userOne = new User("uche@gmail.com", "Uche");
let userTwo = new User("godswill@gmail.com", "Godswill");


console.log(userOne.updateAge())