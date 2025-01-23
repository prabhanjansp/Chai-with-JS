//  For loop syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)

// }
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 6) {
//     console.log("6 is the best number");
//   }
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
// console.log(` outer loop ${i}`);
for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j} and outer loop ${i}`);
    // console.log(i + '*' + j + '=' + i * j);
}    
}
//  for every iteration of the outer loop, the inner loop will run 10 times.

let myArray=["apple","banana","mango","orange","grapes"];
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


for (let a = 1; a <= 20; a++) {
    if (a==5) {
        console.log(`detected 5`)
        break // it will come out of the loop once it detects 5
    }
    console.log(` value of i is  ${a}`);
    
}
for (let b = 1;b <= 20; b++) {
    if (b==5) {
        console.log(`detected continue 5`)
        continue // ek baar maaf kardo it will ignore th iteration where it detects 5
        //  and also will skip that iteration 
    }
    console.log(` value of a is  ${b}`);
    
}