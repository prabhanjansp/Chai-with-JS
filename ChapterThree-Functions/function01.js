function myname() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("N");
  console.log("J");
  console.log("A");
  console.log("N");
  // function scope or defnition
}
// myname  will be reference
// myname()  will execute
myname();
function addTwoNumbers(number1, number2) {
  // no need to mention the type
  //n1,n2 are called as parameter
  console.log(number1 + number2);
}

addTwoNumbers(); //Nan we have not specified any arguments
addTwoNumbers(3 + "4"); //34
addTwoNumbers(3, null); //3
addTwoNumbers(3, 5); //3
const res = addTwoNumbers(3, 5);
console.log(res, "res"); //undefined
// what did funtion sent back always matters means the concepts of return
// parametr will come during the time of function definition

// arguments will come during the time of executing the function

function addnum(n1, n2) {
  let res = n1 + n2;
  return res;
  console.log("first"); // this line will become unreachable code beacuse once the return is executed then it won't consider
}

function add(n1, n2) {
  return n1 + n2;
}
// when use return then only i can able to store it into one variable
// ****************scope of the function**************************** ***

function loginUserMessage(userName = "sam") {
  if (userName === undefined) {
    //   if (!userName) {
    console.log("please enter a user name");
    return;
  }
  return ` ${userName} just loggedin `;
}
console.log(loginUserMessage("Prabhanjan")); //prabhanjan
console.log(loginUserMessage()); //undefined
// username will be sam and its default

// *****************

// shoping cart
function calculateCartPrice(n1) {
  return n1;
}
console.log(calculateCartPrice(2));
function calculateCartPrice2(...n1) {
  return n1;
}
console.log(calculateCartPrice2(200, 400, 500, 600)); //[ 200, 400, 500, 600 ]
// how function will treate the rest operator
function calculateCartPrice3(val1, val2, ...n1) {
  return n1;
}
console.log(calculateCartPrice3(200, 400, 500, 600)); //[ 500, 600 ] val1 and 2 will occupy the 1&2 values remaining will become rest
// how function will treate the rest operator

const user = {
  userName: "hitesh",
  //   prices: 199, undefined
  prices: 199,
};
function handleObject(random) {
  console.log(
    `username is ${random.userName} and the price is ${random.price}`
  );
}

handleObject(user);
handleObject({
  userName: "prabhanjan",
  price: 399,
});

const myNewArray=[100,200,300,400,500,]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,200,]))