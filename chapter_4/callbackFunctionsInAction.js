// get a reference to the 'ul'
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "sean", "austin"];

let html = ``;

people.forEach(
  (person) => (html += `<li style="color: purple">${person}</li>`)
);

console.log(html);

ul.innerHTML = html;
