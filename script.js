let userOne = {
    email : "uche@gmail.com",
    name : "Uche", 
    login(){
        console.log(userOne.email, 'has logged in');
    },
    logOut(){
        console.log(this.email, 'logged out');
    } 
};

console.log(userOne.name);
console.log(userOne.email);
console.log(userOne.login());
console.log(userOne.logOut());