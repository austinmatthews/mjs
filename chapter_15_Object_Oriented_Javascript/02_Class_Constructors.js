class User {
  constructor(username, email) {
    //setup properties on the object
    this.username = username;
    this.email = email;
  }
}

const userOne = new User('Austin', 'austm14@gmail.com');
const userTwo = new User('Lindsey', 'linds@gmail.com');

console.log(userOne);
console.log(userTwo);

//the 'new' keyword
//1 - it creates a new empty object {}
//2 - it binds the value of 'this' the the new empty object
//3 - it calls the constructor function to 'build' the object
