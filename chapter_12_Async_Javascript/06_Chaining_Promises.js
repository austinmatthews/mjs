const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else reject('error');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodos('todos/luigi.json')
  .then((data) => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/mario.json');
  })
  .then((data) => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/austin.json');
  })
  .then((data) => {
    console.log('promise 3 resolved', data);
  })
  .catch((err) => {
    console.log('promise rejected', err);
  });
