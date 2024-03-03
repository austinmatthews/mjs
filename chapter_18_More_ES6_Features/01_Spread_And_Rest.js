// rest parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

//spread syntax (arrays)
const people = ['Austin', 'Connor', 'Lindsey'];
const members = ['Hello', 'Goodbye', ...people];
console.log(...people);
console.log(...members);

//spread syntax (objects)

const person = { name: 'Austin', age: 30, job: 'Net Ninja' };
const personClone = { ...person, location: 'Atlanta' };

console.log(personClone);
