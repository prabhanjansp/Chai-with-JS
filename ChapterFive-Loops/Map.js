// const coding=["JavaScript","Python","Java","C#","Ruby","TypeScript"];
// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// }
// );
// // console.log(values)
// // HERE we are checking the return value of the forEach method and it will return undefined as  irrespective of the situation it is not returning anything

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = num.filter((val) => val > 5);
console.log(newNum);
// [ 6, 7, 8, 9, 10 ] // it will return the value greater than 5
//   will return the value greater than 5

// explicit return will not happen in the filter method when we write the scope of the function in the curly braces
// if we write the scope of the function in the curly braces then we have to write the return keyword explicitly

const newNum1 = [];
newNum1.forEach((val) => {
  if (val > 5) {
    newNum1.push(val);
  }
});

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishedYear: 1960,
    edition: "1st",
  },
  { title: "1984", genre: "Dystopian", publishedYear: 1949, edition: "1st" },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishedYear: 1813,
    edition: "3rd",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishedYear: 1925,
    edition: "1st",
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publishedYear: 1851,
    edition: "1st",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishedYear: 1951,
    edition: "1st",
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publishedYear: 1932,
    edition: "1st",
  },
  { title: "Jane Eyre", genre: "Romance", publishedYear: 1847, edition: "1st" },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishedYear: 1937,
    edition: "1st",
  },
  {
    title: "War and Peace",
    genre: "Historical Fiction",
    publishedYear: 1869,
    edition: "1st",
  },
  {
    title: "Crime and Punishment",
    genre: "Psychological Fiction",
    publishedYear: 1866,
    edition: "1st",
  },
  {
    title: "The Alchemist",
    genre: "Adventure",
    publishedYear: 1988,
    edition: "1st",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishedYear: 1954,
    edition: "1st",
  },
  {
    title: "The Road",
    genre: "Post-apocalyptic",
    publishedYear: 2006,
    edition: "1st",
  },
  {
    title: "The Book Thief",
    genre: "Historical Fiction",
    publishedYear: 2005,
    edition: "1st",
  },
  {
    title: "Fahrenheit 451",
    genre: "Dystopian",
    publishedYear: 1953,
    edition: "1st",
  },
  {
    title: "Animal Farm",
    genre: "Satire",
    publishedYear: 1945,
    edition: "1st",
  },
  {
    title: "Wuthering Heights",
    genre: "Romance",
    publishedYear: 1847,
    edition: "1st",
  },
  {
    title: "The Chronicles of Narnia",
    genre: "Fantasy",
    publishedYear: 1950,
    edition: "1st",
  },
  {
    title: "Of Mice and Men",
    genre: "Fiction",
    publishedYear: 1937,
    edition: "1st",
  },
];

const userbooks = books.filter((item) => {
  return item.genre === "Fiction";
});

const userbooks1 = books.filter((item) => {
  return item.publishedYear >= 1950 && item.genre === "Fiction";
});

console.log(userbooks);
console.log(userbooks1);
