// sorting digits

// var arr=[44,170,56,100,34,64,150,23,11,12,1];

// console.log(arr.sort());

// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>b-a));


// sorting string
// var vehicle=["Bus","car","bike","Cycle"];

// console.log(vehicle.sort());
// console.log(vehicle.reverse());

// console.log(vehicle.sort((a,b)=>a.localeCompare(b)));
// console.log(vehicle.sort((a,b)=>b.localeCompare(a)));


var points = [40, 100, 1, 5, 25, 10];

// Given an array of numbers and perform sorting
// 1.ascending order the numbers 
console.log(points.sort((a,b)=>a-b));
// 2.descending order the numbers
console.log(points.sort((a,b)=>b-a));
// 3.find the lowest number
console.log(points.sort((a,b)=>a-b)[0]);

// 4.find the highest number
console.log(points.sort((a,b)=>b-a)[0]);
