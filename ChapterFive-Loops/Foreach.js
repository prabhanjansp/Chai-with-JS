const coding = ["JavaScript", "Python", "Java", "C#", "Ruby", "TypeScript"];

// for each loop is higher order function
coding.forEach((item) => {
  console.log(item);
}); // it will take a callback function as an argument

coding.forEach(function (value) {
  console.log(value);
});

function print(value) {
  console.log(value);
}
coding.forEach(print);

coding.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

const cities = [
  { name: "New York", population: 1000000 },
  { name: "Los Angeles", population: 2000000 },
  { name: "Chicago", population: 3000000 },
  { name: "Houston", population: 4000000 },
  { name: "Phoenix", population: 5000000 },
  { name: "Philadelphia", population: 6000000 },
  { name: "San Antonio", population: 7000000 },
  { name: "San Diego", population: 8000000 },
  { name: "Dallas", population: 9000000 },
  { name: "San Jose", population: 10000000 },
];

cities.forEach((city) => {
    console.log(city.name);
})
