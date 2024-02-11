const para = document.querySelector('p');
console.log(para);

//grabs class error inside a div
const divErrorPara = document.querySelector('div.error');
console.log(divErrorPara);

//grabs first element with error class
const errorPara = document.querySelector('.error');
console.log(errorPara);

const errorPara2 = document.querySelector('body > h1');
console.log(errorPara2);

//how to grab multiple
const multipleParas = document.querySelectorAll('p');
console.log(multipleParas);
//can select a specific index
console.log(multipleParas[0]);

//can loop through the multiple nodes
multipleParas.forEach((para) => {
  console.log(para);
});

//gets all elements with the error class
const errors = document.querySelectorAll('.error');
errors.forEach((error) => console.log(error));
