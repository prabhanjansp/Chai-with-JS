// javasript execution context
//  it is all about how it will run and execute the code

// this will run in two phases
// 1) Global execution context which will refer to this keyword which refer to the window object
// which is the global object in the browser
// in node it will refer to the empty object
// it will run in the single thread

// 2) Functional execution context which will refer to the current context

// phase 1) memory creation phase
// will get the memory allocation for the variables and functions
// phase 2) code execution phase
let val1=11;
let val2=22;
function add(val1,val2){
    let result=val1+val2;
    return result;
}       
let sum=add(val1,val2);
let sum2=add(100,200); 

// 1) it will start with the global execution context
//  will allocate inside the this keyword

// 2) it will allocate the memory for the variables and functions

// call stack
// if i am calling 3 function then it will be added to the call stack
//if the function is completed then it will be removed from the call stack
// it will be added in the LIFO order

function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
    
}

one()
two()
three()

