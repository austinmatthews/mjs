// sets
const namesArray = ['Austin', 'Linds', 'Connor', 'Austin'];
console.log(namesArray);

//sets removes duplicates
const namesSet = new Set(namesArray);
console.log(namesSet);

const uniqueName = [...namesSet];
console.log(uniqueName);

const uniqueNameArrayOneLiner = [...new Set(namesArray)];
console.log(uniqueNameArrayOneLiner);

const ages = new Set();
ages.add(20);
ages.add(25).add(30).add(30);
console.log(ages);
console.log(ages.size);
console.log(ages.has(20));
console.log(ages.has(21));

//clear out a set
ages.clear();
console.log(ages);

