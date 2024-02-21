const userOne = {
  username: 'Austin',
  email: 'austm14@gmail.com',
  login() {
    console.log('The User Logged In');
  },
  login() {
    console.log(`${this.username} Logged In`);
  },
};

console.log(userOne.username, userOne.email);

userOne.login();

const userTwo = {
  username: 'Linds',
  email: 'linds@gmail.com',
  login() {
    console.log('The User Logged In');
  },
  login() {
    console.log('The User Logged In');
  },
};

console.log(userTwo.username, userTwo.email);

userTwo.login();
