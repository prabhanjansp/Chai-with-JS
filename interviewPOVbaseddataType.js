//primitive and non primitive(r)
//  call by value and the call by reference
//  how the data will store in the memory and how can we access the information

// primitive will get the copied data not the exact reference
// string number boolean null(empty) undefined symbol( will produce unique value in the time), bigint

// reference type
 //will get the reference allocation form the memory directly 
// array, objects,functions

// javascript is 
//  statically typed or dynamically typed
const id=Symbol('123')
const anotherId=Symbol('123');
console.log(id===anotherId)

const hero=["dfdfv","rfrfe","ergfevr"];
let obj={
    name:"prabhanjan",
    age:22,
}
const myFunction=function(){
    console.log("helloworld")
}
const hi=null
console.log(typeof hi) // object

console.log(typeof myFunction) // object function