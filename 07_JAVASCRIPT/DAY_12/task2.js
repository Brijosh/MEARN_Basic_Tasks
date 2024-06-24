// var num=[1,2,3,4,5,6,7,8,9,10,11,,12,13,14]

// console.log(num.filter(num => num%2==0));

// var num=[2,3,4,5,6,7,8,9]
// console.log(num.map(d=> d*2));


const people = [
    { name: 'Alice', age: 30 },
     { name: 'Bob', age: 25 },
     { name: 'Eve', age: 28 }
    ];
    
console.log(people.map(n=> n.name));
console.log(people.map(a=> a.age));