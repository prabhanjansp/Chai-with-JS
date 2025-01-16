
// stack memory and heap memory
//  all the primitive will be stored in the stack memoryStorage

//   and 

//    all the non primitive datatype will store in the heap memory

let name="prabhanjan";
let anothername=name;
anothername="puranik";
console.log(anothername); //puranik
console.log(name); //prabhanjan 
// another name will give the  copy of the updated value and that value will be changes on the heap memory

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo= userOne;
userTwo.email="prabhanjan@gmail.com"
console.log(userTwo.email) //prabhanjan@gmail.com
console.log(userOne.email) //prabhanjan@gmail.com
// in heap memory the original value will get modified