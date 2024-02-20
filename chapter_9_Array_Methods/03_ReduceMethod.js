//reduce method
const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, score) => {
  if (score > 50) acc++;
  console.log(acc);
  return acc;
}, 0);

console.log(result);

const playerScores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
];

const marioScore = playerScores.reduce((acc, playerScore) => {
  if (playerScore.player === 'mario') {
    return (acc += playerScore.score);
  }
  return acc;
}, 0);

console.log(marioScore);
