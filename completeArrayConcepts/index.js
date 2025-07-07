const salad = ["🍅", "🍄", "🥦", "🫛", "🌽", "🥕", "🥑"];
function Car(model) {
  this.model = model;
}
const BMWCar = new Car("BMWX1");
const anotherSalad = new Array("🍅", "🍄", "🥦", "🫛", "🌽", "🥕", "🥑")

console.log("Salad: ", salad);
console.log(" Another Salad: ", anotherSalad);
console.log(salad===anotherSalad); //false

const two=new Array(2);
console.log("Two: ", two); // [ <2 empty items> ]   

const three=new Array(3,4);
console.log("Three: ", three); // [ 3, 4 ]


// how to get elements from an array
const fruits = ["🍎", "🍌", "🍒", "🍑", " 🍍"];

 // 1. Using index
console.log("First fruit: ", fruits[0]); // 🍎
console.log("Second fruit: ", fruits[1]); // 🍌
console.log("Third fruit: ", fruits[2]); // 🍒  
console.log("Last fruit: ", fruits[fruits.length - 1]); // 🍍

for (let i = 0; i <= fruits.length-1; i++) {
    const element = fruits[i];
    console.log(`Element at index ${i}: is ${element}`);
    
}
const ret=fruits.push("🍉"); // will be added the element in the last
console.log(ret)// 6
console.log(fruits)
 
 

const ret1=fruits.unshift("🍈"); // will be added the element in the first
console.log(ret1)// 7
console.log(fruits) // [ '🍈', '🍎', '🍌', '🍒', '🍑', ' 🍍', '🍉' ]

//pop-end

console.log(fruits)
console.log(fruits.pop()) // 🍉
console.log(fruits) // [ '🍈', '🍎', '🍌', '🍒', '🍑', ' 🍍' ]

//shift
console.log(fruits)
console.log(fruits.shift()) 
console.log(fruits) 

const fruitCopy=fruits.slice(); // shallow copy
console.log("Fruits Before Copy: ", fruits); // [ '🍈', '🍎', '🍌', '🍒', '🍑', '  🍍' ]
console.log(" fruits after Copy: ", fruitCopy); // [ '🍈', '🍎', '🍌', '🍒', '🍑', '  🍍' ]
console.log(fruitCopy===fruits) // [ '🍎', '🍌', '🍒', '🍑', ' 🍍' ]
//  slice method won't mutate the original array
console.log(fruitCopy.length) // 6

//  how to determine if the variable is an array
console.log(Array.isArray(fruitCopy)); // true
Array.isArray() // will return true if the variable is an array, otherwise false
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray({})); // false
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false
console.log(Array.isArray([])); // true

//  the destructuring of the array
//  to extract the elements of the array, in the same while extracting the elements of the array, we can assign them to variables
console.log("Destructuring of the array: ");

const apple = fruits[0];
const banana = fruits[1];
const cherry = fruits[2];
const peach = fruits[3];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); //   🍈
console.log(secondFruit); // 🍎
console.log(thirdFruit); // 🍌
//  so the main purpose of the destructuring is to extract the elements of the array and assign them to variables and the arry value which will hold the new array value after destructuring  and those values will be in the []
//  and also need to be careful about the order of the elements in the array, because the order of the elements in the array will be the same as the order of the variables
// also need to specify the data type of the variable, because if the data type of the variable is not specified, it will be undefined
const [first, second, third, ...rest] = fruits; // rest operator will hold

// advantages of the destructuring
// 1)  how to assign a default value to the variable
const [firstFruit1, secondFruit1, thirdFruit1, fourthFruit1 = "🍉"] = fruits; // 🍉 will be assigned to the fourthFruit1 if the fourthFruit1 is not defined
// 2)  how to skip the elements of the array
// traditionally we can skip the elements of the array by using the index, but with destructuring we can skip the elements of the array by using the comma

const [firstFruit2, , thirdFruit2, fourthFruit2] = fruits; // 🍈, 🍌, 🍒 will be assigned to the firstFruit2, thirdFruit2, fourthFruit2 respectively
console.log(firstFruit2); //  🍈

// 3) nested array destructuring
const nestedArray = ["🍎", ["🍌", "🍒"], "🍑"]
const [apple1, [banana1, cherry1], peach1] = nestedArray; // 🍎, 🍌, 🍒 will be assigned to the apple1, banana1, cherry1 respectively
// but with respect to access the nested array elements need to go with the index based approach

// 4) how to swap the variables
let x = 10; 
let y = 20;
[x, y] = [y, x]; // swapping the variables using destructuring
console.log(x); // 20
console.log(y); // 10

// concepts of rest parameter and spread operator
// rest parameter is used to collect the remaining elements of the array into a new array, while the spread operator is used to spread the elements of the array into a new array or object
// rest parameter is used in the function parameters, while the spread operator is used in the function call or in the array or object literal
// rest parameter appears at the left side of the assignment, while the spread operator appears at the right side of the assignment

const[a,b,...c]=[1,2,3,4,5,6,7,8,9];
console.log(a); // 1  

console.log(b); // 2
console.log(c); // [ 3, 4, 5, 6,
// 7, 8, 9 ]
// spread operator
// it comes towords the right side of the assignment, and it is used to spread the elements of the array into a new array or object for the value part
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
const arr3 = [...arr1, ...arr2]; // spreading the elements of the arr1 and arr2 into a new array
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
//  means  each of the elements of the arr1 and arr2 will be spreaded into a new array
//  and also we can use the spread operator to copy the elements of the array into a new array
const arr4 = [...arr1]; // copying the elements of the arr1 into a new array
console.log(arr4); // [ 1, 2, 3 ] 

const arrCopy = [...arr1]; // shallow copy of the array
console.log(arrCopy); // [ 1, 2, 3 ]
console.log(arrCopy === arr1); // false, because the arrCopy is a new array and it is not the same as the arr1
console.log(arrCopy.length); // 3, because the length of the arrCopy is 3, which is the same as the length of the arr1
//  and also we can use the spread operator to copy the elements of the array into a new array

// couple of use cases of the spread operator
// 1)  merging two arrays
const vowels = ["a", "e", "i"];
const consonants = ["b", "c", "d"];
const alphabet = [...vowels, ...consonants]; // merging the vowels and consonants into a new array
console.log(alphabet); // [ 'a', 'e', 'i', 'b', 'c', 'd' ]

// 2)  copying the elements of the array into a new array
const numbers = [1, 2, 3, 4, 5];  
const numbersCopy = [...numbers]; // copying the elements of the numbers into a new array
console.log(numbersCopy); // [ 1, 2, 3, 4, 5 ]
console.log(numbersCopy === numbers); // false, because the numbersCopy is a new array and it is not the same as the numbers
console.log(numbersCopy.length); // 5, because the length of the numbersCopy is 5, which is the same as the length of the numbers 

// 3) swap values of the variables
let a1 = 10;  
let b1 = 20;
[a1, b1] = [b1, a1]; // swapping the values of the a1 and b1 using the spread operator
console.log(a1); // 20 

// array length property
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length); // 5, because the length of the numbers1 is 5
console.log(numbers1[numbers1.length - 1]); // 5, because the last element of the numbers1 is 5
console.log(numbers1[numbers1.length]); // undefined, because the index is out of bounds
numbers1.length=100
console.log(numbers1.length); // 100, because the length of the numbers1 is set to 100
console.log(numbers1); // [ 1, 2, 3, 4, 5, <95 empty items> ]
//  and also we can set the length of the array to a new value, which will truncate the array if the new value is less than the current length of the array
numbers1.length=2**32
console.log(numbers1.length); // 4294967296, because the length of the numbers1 is set to 2**32
console.log(numbers1); // [ 1, 2, <4294967294 empty items> ]

//  and also we can set the length of the array to a new value, which will truncate the array if the new value is less than the current length of the array

numbers1.length=0;
console.log(numbers1.length); // 0, because the length of the numbers1 is set to 0

