const button = document.querySelector('button');
const wrapper = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  wrapper.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  wrapper.style.display = 'none';
});

wrapper.addEventListener('click', () => {
  wrapper.style.display = 'none';
});
