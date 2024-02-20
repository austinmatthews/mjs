const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === request.DONE) {
      if (request.status === 200) callback(undefined, request.responseText);
      else callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data);
});
