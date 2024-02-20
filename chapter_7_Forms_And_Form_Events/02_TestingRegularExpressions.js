const form = document.querySelector('.signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.username.value);
});

//testing RegEx
const username = 'austin';
const pattern = /^[a-z]{6,}$/;

//one way
let result = pattern.test(username);
console.log(result);

//another way
let otherResult = username.search(pattern);
console.log(otherResult);
