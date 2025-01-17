const heros=["thor","Ironman","spiderman"];
const dc=["superman","flash","batman"];
// heros.push(dc);
// console.log(heros)
 //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHero= heros.concat(dc);
// console.log(allHero)
// concat will return new array
// [
//   'thor',
//   'Ironman',
//   'spiderman',
//   [ 'superman', 'flash', 'batman' ],
//   'superman',
//   'flash',
//   'batman'
// ]

// spreadoperator
const newAllHeros=[...heros,...dc];
console.log(newAllHeros)
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const lolArray=[1,2,3,[4,5,6],7,[6,7,[4,7]]];
const realarray=lolArray.flat(5);
// flat method will return all the elements into one array 
// it takes one parameter that is depth we can define INFINITY
console.log(realarray)
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   7
// ]

console.log(Array.isArray("Prabhanjan")); //false
console.log(Array.from("Prabhanjan")); //[
//     'P', 'r', 'a', 'b',
//     'h', 'a', 'n', 'j',
//     'a', 'n'
//   ]
let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3))