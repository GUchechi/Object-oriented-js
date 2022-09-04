class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, "just logged in");
        return this;
    }
    logOut(){
        console.log(this.email, "just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score updated to", this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
}


const userOne = new User( "godswill@gmail.com", "Godswill");
const userTwo = new User ("uche@gmail.com", "Uche")
const admin = new Admin ( "admin@gmail.com", "admin");

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users)


