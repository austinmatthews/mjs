const copy = document.querySelector('.copy-me');
console.log(copy);

copy.addEventListener('copy', () => {
  console.log('OI! My content is copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  //console.log(e.offsetX, e.offsetY);
  box.textContent = `Offset X: ${e.offsetX}, Offset Y: ${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY);
});
