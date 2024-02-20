const para = document.querySelector('p');

const text = para.innerText;

const html = para.innerHTML;

para.innerText = 'Ninjas are awesome!';

const paras = document.querySelectorAll('p');
paras.forEach((para) => {
  para.innerText += ' new text';
});

const content = document.querySelector('.content');
content.innerHTML = '<h2>This is a new header</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
