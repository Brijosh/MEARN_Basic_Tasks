// var vehicle=[]; //declaration

// var vehicle =["car","bus","bus","bike","plane",200000,567000] ;//initilization

// //1 To fetch an item from an array
// console.log(vehicle[5]);

// //2 To find the length of the array
// console.log(vehicle.length);

// //3 Fetch every element of the array
// console.log(vehicle);

// //4 To insert a new element in an array
// vehicle.push("Helicopter")
// console.log(vehicle);

// //5  To get index position of values stored in an array
// for(let index in vehicle)
//     {
//         console.log(index);
//     }

//     var arr=[10,24,5,43,50,17,20];
//     //Check whether the element(2) is present or not
//     var element;
//     for(let index of arr)
//         {
//             if(index==2)
//                 {
//                     element=`present`;
//                     break;
//                 }
//             else
//                 {
//                     element=`Not Present`
//                 }
//         }
//         console.log(element);

//Generate new array with values are subtracted from the total sum of the values
//input : var arr= [4,5,6]; (sum=15)
//output: var arr= [11,10,9]

// var arr=[4,5,6];
// let sum=0;
// for(let i of arr)
//     {
//         sum+=i;
//     }
// for(i in arr)
//     {
//         arr[i]=sum-arr[i]
//     }
// console.log(arr);


//To hold an expenses , and 

//Find total expense
//Find maximum expense
//Find minimum expense



var expenses = [12000,20000,34000,10000,28000,15000,50000];
let total=0;
let max=0;
let min=0;

for(let i of expenses)
    {
        total+=i;
    }
console.log(`Total: ${total}`);

for(i in expenses)
    {
        if(expenses[i]>expenses[i-1])
            {
                max=expenses[i]
            }
    }
    console.log(`Maximum: ${max}`);
    min=expenses[0]
    for(i in expenses)
        {
            if(expenses[i]<min)
                {
                    min=expenses[i];
                }
        }
        console.log(`Minimum: ${min}`);
