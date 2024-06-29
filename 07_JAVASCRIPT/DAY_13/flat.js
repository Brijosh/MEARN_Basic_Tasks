// flat() - flatten the nested array
var a=[
    [10,50],
    [20,60],
    [1,5],
    [15,25],
    [3,8],
    [100,500]
];

// 1) print all numbers > 10 // 50,20,60,15,100,500
console.log(a);
console.log(a.flat());
console.log(a.flat().filter(num=>num>10));


// you can pass a larger deoth value to completelu flatten deeply nested array
// [1,[2,[3,[4,[5]]]]] -> [1,2,3,4,5]

const nestedArray=[1,[2,[3,[4,[5]]]]];
console.log(nestedArray.flat());
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(2));
console.log(nestedArray.flat(3));
console.log(nestedArray.flat(Infinity));

// removes empty slot

const arrayWithEmptySlot=[1,,[2,3],,[4,[5,6]]]
console.log(arrayWithEmptySlot.flat());