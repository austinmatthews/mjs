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

//live feedback event listener
form.username.addEventListener('keyup', (e) => {
  //console.log(e.target.value, form.username.value);
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'fail');
  }
});
