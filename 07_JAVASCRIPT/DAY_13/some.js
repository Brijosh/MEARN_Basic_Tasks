// some()- apply function and returns true or false

//[id, name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
// //1 Is there any product can purchase by 20rs 
console.log(products.some(item=>item[2]<=20));//true

// // // 2 Is there any product with available stock is > 90
console.log(products.some(item=>item[3]>=90));

// // //3  Is there any product with available in the range of 10 to 20
console.log(products.some(item=>item[2]<=20 && item[2]>=10));

// // 4 print all product name available in the range of 20 to 40
products.some(item=>item[2]>=20 && item[2]<=40?console.log(item[1]):null);
