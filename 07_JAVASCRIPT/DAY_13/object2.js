//print count of each item in the given array
a=[10,10,20,20,30,30,40,40,50,50,50,60]
//output {10:2,20:2,30:2,40:2,50:3,60:1}

number={};

a.map(num=> num in number?number[num]+=1:number[num]=1)

// console.log(number);

products=[
    //array of objects
    {pid:100,pname:'apple',band:'5G',price:120000,display:'led'},
    {pid:101,pname:'samsung',band:'5G',price:45000,display:'led'},
    {pid:102,pname:'blackberry',band:'4G',price:50000,display:'led'},
    {pid:103,pname:'nokia',band:'3G',price:1200,display:'lcd'},
    {pid:104,pname:'motorola',band:'4G',price:10000,display:'lcd'},
]

//1. print product name only
console.log(products.map(item=> item.pname));
//2. print all mobile details whose display is lcd
products.map(item=> item.display=='lcd'?console.log(item):null);

//3. print 5G mobile phone name
products.map(item=> item.band=='5G'?console.log(item.pname):null);

//4. sort mobile based on price
console.log(products.sort((a,b)=> a.price-b.price));
//5. print costly mobile
console.log(products.reduce((a,b)=> a.price>b.price?a:b));
//6. print low cost mobile
console.log(products.reduce((a,b)=> a.price<b.price?a:b));
