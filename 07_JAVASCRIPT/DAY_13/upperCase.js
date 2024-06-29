// array.from() - convert string to array

let str="luminar";

console.log(str.toUpperCase());

// convert to array
console.log(Array.from(str));

// to uppercase
console.log(Array.from(str).map(char=> char.toUpperCase()));

// print

Array.from(str).map(char=>char.toUpperCase()).forEach(char=> console.log(char));