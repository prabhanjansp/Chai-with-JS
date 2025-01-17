const user={
    name:'pp',
    price:100,
    welcomeMessage:function(){
        console.log(`${this.name} ,wlecome user`)  //current context
        console.log(this)
    }
}
// user.welcomeMessage();
// user.name="sam"; // now this will become the context and it is changes
// user.welcomeMessage();
console.log(this) //{} in node env this will refer to the empty object


// function chai(){
//     let name="hitesh"
//     console.log(this.name)
// }
// chai();

// const chai=function(){
//     // let name="hitesh"
//     //     console.log(this.name)
// }


const chai=()=>{
    let name="pp"
    console.log(this)
}
// chai();

const addtwo=(n1,n2 )=>{
    return n1+n2 
}
// how to return object in arrow function

const addTwo=(n1,n2)=>  ({useName:"prabhnajn"}) //mandatory to wrap in the parenthises

// const addTwo=(n1,n2)=>  n1+n2 //implicit return

console.log(addTwo(6,6))
