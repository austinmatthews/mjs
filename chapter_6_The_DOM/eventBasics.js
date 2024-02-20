const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('You Clicked Me!');
});

const items = document.querySelectorAll('li');
console.log(items);
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(`${item.textContent} was clicked`);
    console.log(e);
    //Better to use this than console.log(item)
    console.log(e.target);
    //same as above line
    console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});
