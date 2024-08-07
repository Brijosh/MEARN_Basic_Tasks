// print all srting in vowels

str='hai HEllo'

vowels=['a','e','i','o','u','A','E','I','O','U']

// Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))

const string=["Hello","how","are","you"]
console.log(string.map(str=> Array.from(str).filter(char=> vowels.includes(char)).length));
console.log(Array.from(str));