const symbolOne = Symbol('generic name 1');
const symbolTwo = Symbol('generic name 2');

console.log(symbolOne, symbolTwo, typeof symbolOne, typeof symbolTwo);
console.log(symbolOne == symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';

ninja[symbolOne] = 'Aystin';
ninja[symbolTwo] = 'Connor';

console.log(ninja);
