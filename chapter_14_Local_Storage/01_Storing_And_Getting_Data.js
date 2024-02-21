//store data in local storage
localStorage.setItem('name', 'Austin');
localStorage.setItem('age', '30');

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

//updating data
localStorage.setItem('name', 'Linds');
name = localStorage.getItem('name');

console.log(name, age);
