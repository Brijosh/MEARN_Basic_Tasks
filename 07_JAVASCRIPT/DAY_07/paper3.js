// // 1)
// for(let i=1;i<=100;i++)
//     {
//         if(i%3==0 || i%5==0)
//             {
//                 if(i%3==0 && i%5==0)
//                     {
//                         console.log(`FizzBuzz`);
//                     }
//                 else if(i%5==0)
//                     {
//                         console.log(`Buzz`);
//                     }
//                 else
//                     {
//                         console.log(`Fizz`);
//                     }

//             }
//         else
//         {
//             console.log(i);
//         }
            
//     }


// // 2)
// var num=5;
// console.log((num%2==0)?"Numebr is Even":"Number is Odd");


// // 3)
// var n1=7;
// var n2=9;
// var n3=12;
// if(n1>n2&& n1>n3)
//     {
//         if(n2>n3)
//             {
//                 console.log(n1,n2,n3);
//             }
//             else{
//                 console.log(n1,n3,n2);
//             }
//     }
//     else if(n2>n1 && n2> n3)
//         {
//             if(n1>n3)
//                 {
//                     console.log(n2,n1,n3);
//                 }
//                 else{
//                     console.log(n2,n3,n1);
//                 }
//         }
//     else{
//         if(n1>n2)
//             {
//                 console.log(n3,n1,n2);
//             }
//             else
//             {
//                 console.log(n3,n2,n1);
//             }
//     }


// 4)
let year=2024;
if(year%4==0)
    {
        console.log(`Leap Year`);
    }
else
    {
        console.log('Not Leap Year');
    }