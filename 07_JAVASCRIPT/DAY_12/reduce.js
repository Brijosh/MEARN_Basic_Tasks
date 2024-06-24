// Reduce() - function apply to all array elements and returns a sinle value(it will be the last value)

a=[1,2,3,4,5,6,7,8,9,10]

// 1) find sum of elements
// 2) find highest of elements
// 3) find lowest of elements

console.log(a.reduce((n1,n2)=> n1+n2)); //sum

console.log(a.reduce((n1,n2)=> n1>n2? n1:n2));// highest

console.log(a.reduce((n1,n2)=> n1<n2?n1:n2)); //lowest


// reduceRight() - function applys to all the array elements and returns a single value( it will be the first value)

arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    [3,'ponnu',100],
    [4,'manu',100],
    [5,'anu',300]
]

// who gets the nminimum value

console.log(arr.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));

console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));