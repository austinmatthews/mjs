class User {
  constructor(username, email) {
    //setup properties
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} just logged in`);
  }
  logout() {
    console.log(`${this.username} just logged out`);
  }
}

const userOne = new User('Austin', 'austm14@gmail.com');
const userTwo = new User('Lindsey', 'linds@gmail.com');

console.log(userOne, userTwo);

userOne.login();
userTwo.login();
userOne.logout();
userTwo.logout();
