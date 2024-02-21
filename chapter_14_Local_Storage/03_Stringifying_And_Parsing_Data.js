const todos = [
  { text: 'play mariokart', author: 'austin' },
  { text: 'buy milk', author: 'linds' },
  { text: 'buy bread', author: 'river' },
];

console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(stored);
console.log(JSON.parse(stored));
