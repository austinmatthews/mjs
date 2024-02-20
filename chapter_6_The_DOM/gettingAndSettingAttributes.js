const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mesg = document.querySelector('p');
console.log(mesg);
console.log(mesg.getAttribute('class'));

mesg.setAttribute('class', 'success');
console.log(mesg.getAttribute('class'));

mesg.setAttribute('style', 'color: green')