// class User {
//     constructor(email, name, score) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;   
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email
//         });
//     }
// }

// let userOne = new User ('godswilluchendu7@gmail.com', 'Godswill');
// let userTwo = new User ('uchechi@gmail.com', 'Uchechi');
// let admin = new Admin('strings@gmail.com', 'String')

// let users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);
// console.log(users)

//  Prototype
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = true;
}

User.prototype.login = function(){
    this.online = false;
    console.log(this.name, 'has logged in');
}


User.prototype.logout = function(){
    this.online = true;
    console.log(this.name, 'has logged out');
}

function Admin (...args) {
    User.apply(this,args)
    this.role='super admin';
}

Admin.prototype = Object.create(User.prototype)

// Add another method to Admin
Admin.prototype.deleteUser = function (u){
     users = users.filter(user => {
        return u.email != user.email
     });
}

let userOne = new User ('godswilluchendu7@gmail.com', 'Godswill');
let userTwo = new User ('uchechi@gmail.com', 'Uchechi');
let admin = new Admin('strings@gmail.com', 'String')
let users = [userOne, userTwo, admin];

console.log(admin.login())

admin.deleteUser(userOne)
console.log(users)