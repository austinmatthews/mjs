//callbacks and foreach

// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   console.log(value);
// });

let people = ["mario", "luigi", "ryu", "sean", "austin"];

const logPerson = (person, index) => {
  console.log(`${index} hello ${person}`);
};

people.forEach(logPerson);
