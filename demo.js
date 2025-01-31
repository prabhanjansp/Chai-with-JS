// // Numbers:
// let length = 16;
// console.log(typeof length);
// let weight = 7.5;
// console.log(typeof weight);

// // Strings:
// let color = "Yellow";
// console.log(typeof color);
// let lastName = "Johnson";
// console.log(typeof lastName);

// // Booleans
// let x = true;
// console.log(typeof x);
// let y = false;
// console.log(typeof y);

// // Object:
// const person = { firstName: "John", lastName: "Doe" };
// console.log(typeof person);
// console.log(typeof person.firstName);
// console.log(typeof person.lastName);

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof cars);
// console.log(typeof cars[0]);
// console.log(typeof cars[1]);
// console.log(typeof cars[2]);

// // Date object:
// const date = new Date("2022-03-25");
// console.log(typeof date);

function myFun(p1, p2) {
  return p1 * p2;
}
console.log(myFun(10,20)); //200
console.log(myFun()); //Nan
console.log(myFun);


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  console.log(value)