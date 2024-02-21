//store data in local storage
localStorage.setItem('name', 'Austin');
localStorage.setItem('age', 30);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//deleting data from local storage
localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

//remove everything from local storage
localStorage.clear();

age = localStorage.getItem('age');
name = localStorage.getItem('name');
console.log(name, age);
