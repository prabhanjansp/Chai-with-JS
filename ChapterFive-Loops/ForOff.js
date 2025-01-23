// for of
//  Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

// for (const element of object) {

// }

const arr = ["apple", "banana", "mango", "orange", "grapes"];

for (const value of arr) {
  console.log(value);
}

const greeting = "Hello World";
for (const greet of greeting) {
  if (greeting.endsWith("5")) {
    console.log(` each char ${greet}`);
    break;
  }
  console.log(` each char ${greet}`);
}

const map = new Map();
map.set("name", "John");
map.set("age", 25);
map.set("in", "USA");
console.log(map);
//  map will always return an array of key value pair and we can use for of loop to iterate over it and will display in same order as we have inserted
// and will make sure that it will not change the order of insertion and will maintain the uniqueness of key

for (const key of map) {
  console.log(key); // ["name", "John"] ["age", 25] ["in", "USA"] will return the entire as it is
  //  to extract individual key and value we can use destructuring
}

for (const [key, value] of map) {
  console.log(key,'>-', value); // way to extract individual key and value with the syntax

}

// forof for object
const obj = {
  name: "John",
  age: 25,
  in: "USA",
};


for (const [key,value] of obj) {
  console.log(key, ':=', value); // obj is not iterable
    
}
