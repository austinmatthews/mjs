const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreText = document.querySelector('.score');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) score += 25;
  });

  //show result on page
  result.classList.remove('d-none');

  let output = 0;

  const timer = setInterval(() => {
    scoreText.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    }
    output++;
  }, 15);

  scrollTo(top);
});
