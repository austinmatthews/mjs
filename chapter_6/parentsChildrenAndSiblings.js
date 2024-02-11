const article = document.querySelector('article');
console.log(article);

const children = article.children;
console.log(children);

console.log(Array.from(children));

Array.from(children).forEach((child) => {
  console.log(child);
  child.classList.add('article-element');
});

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children);
