// let mydate= new Date();
// console.log(mydate); //2025-01-16T16:44:19.268Z
// console.log(mydate.toString()); //Thu Jan 16 2025 22:14:19 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); //Thu Jan 16 2025
// console.log(mydate.toISOString()); //2025-01-16T16:44:19.268Z
// console.log(mydate.toJSON());  //2025-01-16T16:44:19.268Z
// console.log(mydate.toLocaleString());  //16/1/2025, 10:14:19 pm
// console.log(mydate.toLocaleDateString());  //16/1/2025
// console.log(typeof mydate) //object

let mydatenew = new Date(2023, 0, 23);
console.log(mydatenew.toDateString());
// console.log(mydatenew.toDateString());
// month will start index number 0
let mydatenew2 = new Date(2023, 0, 23, 6, 3);
console.log(mydatenew2.toLocaleString());

let mydatenew3 = new Date("2023-05-29");
console.log(mydatenew3.toLocaleString());
//yyyy-mm-dd

let mydatenew4 = new Date("01/15/2025");
console.log(mydatenew4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mydatenew.getTime()); // only suitable situation comparison
console.log(Math.floor(Date.now() / 1000));  // will get the output in seconds
 let dateofday=new Date();
 console.log(dateofday.getDate()); //16
 console.log(dateofday.getDay()); //4
 console.log(dateofday.getFullYear()); //2025
 console.log(dateofday.getHours()); //22
 console.log(dateofday.getMinutes()); //37
 console.log(dateofday.getTime());
 console.log(dateofday.getTimezoneOffset());
 console.log(dateofday.getUTCDate());
 console.log(dateofday.getUTCFullYear());


 console.log(dateofday.toLocaleString('default',{
    weekday:"long",
    timeZone:""
 }) )