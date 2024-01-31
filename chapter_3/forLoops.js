//for loops

for (let i = 0; i < 5; i++) {
  console.log("In loop:", i);
}

console.log('loop finished');

const names = ['sean', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`
  console.log(html);
}