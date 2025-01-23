// if
const isUserLoggedIn = true;
if (isUserLoggedIn) {
  // code to run if condition is true
  console.log("first");
}
// <, >, <=, >=, ==, ===, !=, !==

const temperature = 30;
if (temperature === 50) {
  console.log("less than 50");
} else {
  console.log("less than 50");
}
console.log("irrespective of the statement it will execute");

const score = 200;
if (score >= 100) {
  const power = "super power";
  // var power= "super power"  // var is function scoped will not give error in console.log statement outside if block
  console.log(`You have ${power}`);
}
// console.log(`You have ${power}`) // ReferenceError: power is not defined because power is block scoped

// if else shorthand notation

const balance = 1000;
if (balance >= 1000) console.log("You have enough balance");
// impliciting return statement

if (balance < 500) {
  console.log("You have  not enough balance");
} else if (balance < 700) {
  console.log("You don't have enough balance");
} else if (balance < 900) {
  console.log("You have enough balance");
} else {
  console.log("You have enough balance");
}

const debitCard = true;
const loggedINfromGoogle = false;
const loggedInfromEmail = true;

if (debitCard && isUserLoggedIn) {
    console.log("Allow to make payment"); 
}

if (loggedINfromGoogle || loggedInfromEmail) {
    console.log("Allow to make payment"); 
}