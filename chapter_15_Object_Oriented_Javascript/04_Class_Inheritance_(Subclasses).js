class User {
  constructor(username, email) {
    //setup properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  deleteUserFromStatic(user) {
    usersOne = usersOne.filter((u) => u.username !== user.username);
  }
  deleteUserOther(userArray, user) {
    return userArray.filter((u) => u.username !== user.username);
  }
}

const userOne = new User('Austin', 'austm14@gmail.com');
const userTwo = new User('Lindsey', 'linds@gmail.com');
const adminOne = new Admin('Sean', 'sean@gmail.com');

let usersOne = [userOne, userTwo, adminOne];
let usersTwo = [userOne, userTwo, adminOne];

console.log('User array one', usersOne);
console.log('User array two', usersTwo);

adminOne.deleteUserFromStatic(userOne);
console.log('User array one', usersOne);
console.log('User array two', usersTwo);

const newUsers = adminOne.deleteUserOther(usersTwo, userOne);

console.log('User array one', usersOne);
console.log('User array two', usersTwo);
console.log('User array new', newUsers);
