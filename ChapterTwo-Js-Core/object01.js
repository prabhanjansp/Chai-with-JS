//literals singleton constructor

// symbol datatype

const sym = Symbol("key1");
const jsUser = {
  name: "prabhanjan",
  age: 28,
  fullname: "Prabhanjan shrinicas Puranik", // not able to access the value
  // sym:"mykey1", it dosen't access as symbol
  [sym]: "mykey", //way to access and use the variable
  location: "bangalore",
  email: "ppaa@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};
// Object.create // create a object through the constructor single ton

console.log(jsUser.age);
//way to access the js object
// console.log(jsUser[email]) //anynonimous object because in object key value will be read as string thats why we need to pass that
console.log(jsUser["email"]);
console.log(jsUser.sym);
console.log(jsUser[sym]); //acts as proper symbol
console.log(typeof jsUser.sym);
jsUser.email = "prabhanjan@gmail.com";
console.log(jsUser["email"]);

// Object.freeze(jsUser);
jsUser.email = "prabhanjan"; // object will not get propagate
console.log(jsUser);
// {
//   name: 'prabhanjan',
//   age: 28,
//   fullname: 'Prabhanjan shrinicas Puranik',
//   location: 'bangalore',
//   email: 'prabhanjan@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'saturday' ],
//   [Symbol(key1)]: 'mykey'
// }

jsUser.greeting = function () {
  console.log(`hello js user ${this.name}`);
};
// whenever i want to reference the same object then i have to use this key word with . operator i can able to access
// console.log(jsUser.greeting); //undefined and will return function reference
console.log(jsUser.greeting()); //its not a fuuuuuuuunction