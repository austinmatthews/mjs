const scores = [10, 30, 15, 25, 50, 40, 5];

var passedScores = scores.filter((score) => score > 20);

console.log(scores);
console.log(passedScores);

const users = [
  {
    name: 'Austin',
    premium: true,
  },
  {
    name: 'Linds',
    premium: false,
  },
  {
    name: 'Connor',
    premium: false,
  },
  {
    name: 'Sav',
    premium: true,
  },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
