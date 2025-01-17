// let var const

// let a=1;
// var b=2
// const c=3;
// {
// } //scope
// let a = 300; //global scope i can access this one
// if (true) {
//   let a = 1; //block scope
//   const c = 3;
//   var b = 2;
//   console.log("inner block", a);
// }
// // console.log(a); a iss not defined
// // console.log(c);
// console.log(a);

// function one() {
//   const username = "prabhanjan";
//   function two() {
//     const website = "blog";
//     console.log(username);
//   }
//   console.log(website); //undefined
//   two(); //only thing will execute
// }

// one(); //will not execute

// if (true) {
//   const name = "pp";
//   if (name === "pp") {
//     const website = "youtube";
//     console.log(name + website);
//   }
// //   console.log(website);
// }
// console.log(name) // no scope belongs to this varibale

//+++++++++++++++++++++++++++++ one main concepts+++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}
console.log(addTwo(5)) //Cannot access 'addTwo' before initialization if we assign a variable to a value
const addTwo=function(num)
{
    return num+2

}

