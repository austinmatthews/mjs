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
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUserFromStatic(user) {
    usersOne = usersOne.filter((u) => u.username !== user.username);
  }
  deleteUserOther(userArray, user) {
    return userArray.filter((u) => u.username !== user.username);
  }
}

const userOne = new User('Austin', 'austm14@gmail.com');
const userTwo = new User('Lindsey', 'linds@gmail.com');
const adminOne = new Admin('Sean', 'sean@gmail.com', 'Manager');

console.log(adminOne);
