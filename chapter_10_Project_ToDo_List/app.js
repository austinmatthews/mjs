const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const string =
    `<li class="list-group-item d-flex justify-content-between align-items-center">` +
    `<span>${todo}</span>` +
    `<i class="far fa-trash-alt delete"></i>` +
    `</li>`;
  todoList.innerHTML += string;
};

//add todo
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todo
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) e.target.parentElement.remove();
});

const filterTodos = (searchTerm) => {
  Array.from(todoList.children)
    .filter((todo) => !todo.textContent.includes(searchTerm))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(todoList.children)
    .filter((todo) => todo.textContent.includes(searchTerm))
    .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
  const searchTerm = search.value.trim();
  filterTodos(searchTerm);
});
