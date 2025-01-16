const myArr=[0,1,2,3,4,5];
console.log(myArr)
//datetype is object
// data types  can mixed
// /arrays are resizable
// 0 based indexing
// js array creates shallow copies deep copies 

const heros=["raj","nag"];
console.log(heros)
const heros2= new Array("puneeth","sudeep");
console.log(heros2)
console.log(heros2[0]);


// ********** methods***************
heros2.push('darshan');
console.log(heros2)

heros2.push('yash');
console.log(heros2)

heros2.pop();
console.log(heros2)

heros2.unshift('ganesh')
console.log(heros2)


heros2.shift()
console.log(heros2)
console.log(heros2.includes("yash")); //false
console.log(heros2.indexOf("puneeth"))//0

const newHero=heros2.join()
console.log(newHero) //string
console.log(typeof(newHero))//string

//slice and splice

console.log("A ",myArr); //A  [ 0, 1, 2, 3, 4, 5 ]


const myn1=myArr.slice(1,3);  

console.log(myn1)//[ 1, 2 ]
console.log("B ",myArr) //B  [ 0, 1, 2, 3, 4, 5 ]


const myn2=myArr.splice(1,3);
console.log("c ",myArr) //c  [ 0, 4, 5 ]
console.log(myn2) //[ 1, 2, 3 ]


