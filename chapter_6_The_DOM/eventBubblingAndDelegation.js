const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Something New';
  ul.prepend(li);
});

const items = document.querySelectorAll('li');
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});
