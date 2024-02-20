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
    console.log('promise resolved', data);
  })
  .catch((err) => {
    console.log('promise rejected');
  });

//Promise Example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    //resolve('some data');
    reject('some error');
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

getSomething()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
