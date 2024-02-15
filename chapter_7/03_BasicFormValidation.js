const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value;
  //validation
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = 'Passed';
  } else {
    feedback.textContent = 'Fail';
  }
});
