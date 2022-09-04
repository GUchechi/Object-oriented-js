function User (email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.name, "has logged in");
    }
}


const userOne = new User( "godswill@gmail.com", "Godswill");
const userTwo = new User ("uche@gmail.com", "Uche")

console.log(userOne)
userTwo.login();


