// reduce
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = num.reduce((acc, curr) => {
  console.log(`acc:${acc} and curr :${curr}`);
  return acc + curr;
}, 0);

console.log(total);
// acc will the 1st time initial value
//  shoping cart product final value

const courses = [
  { courseName: "Web Development Bootcamp", price: 499 },
  { courseName: "Data Science with Python", price: 699 },
  { courseName: "Graphic Design Masterclass", price: 299 },
  { courseName: "Digital Marketing Essentials", price: 399 },
  { courseName: "Cybersecurity Fundamentals", price: 599 },
];
 const store=courses.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(store)
console.log(typeof(store))
