// object literals

let user = {
  name: 'Austin',
  age: 30,
  email: 'austm14@gmail.com',
  location: 'Atlanta',
  blogs: ['why mac and cheese rules', '10 things to do'],
  login: function () {
    console.log('the user logged in');
  },
  logout: function () {
    console.log('The user logged out');
  },
};

user.login();

const name = 'Austin';

console.log(name.toUpperCase());

user.logout();
