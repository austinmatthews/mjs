const title = 'Best reads of 2019';
const author = 'Austin';
const likes = 30;

//concatenation
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

//template string
let result = `The blog called ${title} by ${author} has ${likes} likes`

//creating html template
let html = `
  <h2>${title}</h2>
  <p>By ${author}<p>
  <span> This blog has ${likes} likes<span>
`;

console.log(result);
console.log(html);