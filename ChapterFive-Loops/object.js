//  loop for the object

// for in loop
const obj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    ts: "TypeScript",
    go: "Golang",

    };

    for (const key in obj) {
    //   console.log(key) // will return the key of the object
    // console.log(` ${key} : ${obj[key]}`); // will return the key and value of the object
    }



    const arr = ["apple", "banana", "mango", "orange", "grapes"];
    for (const key in arr) {
    console.log(key); // will return the index of the array
    // arrays key  by default will be index as values are stored in index
    console.log(arr[key]); // will return the value of the array
    }

    const map=new Map(); // it is not iterable for that reason we can not use for in loop
    map.set("name","John"); 
    map.set("age",25);
    map.set("in","USA");
    for (const key in map) {
    console.log(key); // will return the key of the map 
    // will return the key of the map

    }