const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNum = nums.map((val) => {
//   return val + 10;
// });
// console.log(newNum);

const newNum = nums
  .map((num) => {
    return num * 10;
  })
  .map((val) => { //will consist of previous array values
    return val + 1;
  }).filter((num)=>{
    return num>40
  })
console.log(newNum);

// chaining
