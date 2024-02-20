//timestamps
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
console.log(now.getTime());
console.log(before.getTime());

const diff = now.getTime() - before.getTime();
const mins = Math.round(diff / 1000 / 60);
console.log(mins);
const hours = Math.round(mins / 60);
console.log(hours);
const days = Math.round(hours / 24);
console.log(days);