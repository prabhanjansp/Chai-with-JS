// truthy and falsy values
//
const userEmai = "prabhanjan@gmail.com";
if (userEmai) {
  console.log("user email is present");
} else {
  console.log("user email is not present");
}

// truthy values
// [] ,"0",'false'," ",{},function(){}

// falsy values
// false,0,-0,BigInt 0n, "", null, undefined, NaN

const users = [];
if (users.length === 0) {
  console.log("array empty");
} else {
  console.log("araay not empty");
}

const user = {};

if (Object.keys(user).length === 0) {
  console.log("object empty");
}
console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true

//  Nullish coalescing operator(??): null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; // this operator will check the safety  for null and undefined and
// isntead of 10 there will be function call to check
// val1 = undefined ?? 15;
val1= null??20??30
console.log(val1)
// appwrite and fb

// turnary operator
// condition ? true : false

const iceTeaPrice = 20;
iceTeaPrice>=80?console.log("I will buy ice tea"):console.log("I will not buy ice tea");
