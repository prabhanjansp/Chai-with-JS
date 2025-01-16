const score = 100;
console.log(score);
const balance = new Number(4000);
console.log(balance); //[Number: 4000]
console.log(balance.toString()); //4000 // value will be converted into string
console.log(balance.toString().length); //4 // will get the string prototypes
console.log(balance.toFixed(2)); //4000.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));
// precision will put focus on how many values should consider
const lol = 1000000;
console.log(lol.toLocaleString());
console.log(lol.toLocaleString("en-IN"));

// -------------------------------*******MATHS***********---------------------
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,8,10));
console.log(Math.max(4,6,8,10));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// math .random always generates number between 0 and 1
// +1 by this will get minimum 1 max 9 and will avoid the zero case
