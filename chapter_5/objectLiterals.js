//object literals

let user = {
  name: 'Austin',
  age: 30,
  email: 'austm14@gmail.com',
  location: 'Atlanta',
  blogs: ['why mac and cheese rules', '10 things to do'],
};

console.log(user.name);
console.log(user.age);
console.log(user.blogs);

user.age = 35;
console.log(user.age);

user['name'] = 'Sean';
console.log(user['name']);

console.log(typeof user);

