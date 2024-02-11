// const content = document.querySelector('.error');
// console.log(content.classList);

// content.classList.add('another');
// console.log(content.classList);

// content.classList.remove('another');
// console.log(content.classList);

// content.classList.add('success');
// console.log(content.classList);

const paras = document.querySelectorAll('p');

paras.forEach((para) => {
  if (para.textContent.includes('success')) para.classList.add('success');
  else if (para.textContent.includes('error')) para.classList.add('error');
});

const title = document.querySelector('.title');
title.classList.toggle('test');
