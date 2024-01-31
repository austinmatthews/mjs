let ninjas = ["sean", "ryu", "chun-li"];

ninjas[1] = "ken";
console.log(ninjas[1]);

let ages = [25, 20, 30, 35];
console.log(ages[2]);
console.log(ages.length);

//array methods
let result = ninjas.join(", ");
console.log(result);

result = ninjas.indexOf("ken");
console.log(result);

result = ninjas.concat(["austin", "lindsey"]);
console.log(result);

result = ninjas.push("brett");
console.log(result);
console.log(ninjas);

result = ninjas.pop();
console.log(result);
console.log(ninjas);
