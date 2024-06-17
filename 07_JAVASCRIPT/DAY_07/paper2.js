// // 1)
// var x=5;
// var y=7;
// console.log(x+y);

// 2)
// var n1=100;
// var n2=21;
// var n3=112;

// if(n1<n2 && n1<n3)
//     {
//         console.log(`${n1} is the smallest`);
//     }
// else if(n2<n1 && n2<n3)
//     {
//         console.log(`${n2} is the smallest`);
//     }
// else
//     {
//         console.log(`${n3}is the smallest`);
//     }


// 3)
// var num=14;
// if(num>=10 && num<=20)
//     {
//         console.log(`In Range`);
//     }
// else{
//     console.log(`Out Of Range`);
// }

// 4)
// var num=47;
// let prime=true;
// for(let i=2; i<=num/2;i++)
//     {
//         if(num%i==0)
//             {
//                 prime=false;
//                 break;
//             }
//     }
// if(prime==true)
//     {
//         console.log(`${num} is a prime number`);
//     }
// else
//     {
//         console.log(`${num} is not a prime number`);
//     }

// 5)
// let day=3;
// switch(day)
// {
//     case 0:
//         {
//             console.log(`Sunday`);
//             break;
//         }
//     case 1:
//        {
//             console.log(`Monday`);
//             break;
//         }
//     case 2:
//         {
//             console.log(`Tuesday`);
//             break;
//         }
//     case 3:
//         {
//             console.log(`Wednesday`);
//             break;
//         }
//     case 4:
//     {
//         console.log(`Thursday`);
//         break;
//     }
//     case 5:
//        {
//             console.log(`Friday`);
//             break;
//        }
//     case 6:
//         {
//             console.log(`Saturday`);
//             break;
//         }
//     default:
//         {
//             console.log(`Invalid Day`);
//             break;
//         }
// }


// 6)
// let char='e';
// if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
//     {
//         console.log(`Vowel`);
//     }
// else
// {
//     console.log(`Consonant`);    
// }

// 7)
// let age=23;
// if(age<=12)
//     {
//         console.log(`Child`);
//     }
// else if(age>=13 && age<=19)
//     {
//         console.log(`Teenager`);
//     }
// else
// {
//     console.log('Adult');
// }

// // 8)
// let num=234;
// if(num%3==0 && num%5==0)
//     {
//         console.log(`${num} Divisible by 3 and 5`);
//     }
//     else
//     {
//         console.log(`${num} Divisible by 3 and 5`);

//     }


// 9)

var a=2;
var b=3;

console.log(`${a} + ${b} = ${a+b}`);
console.log(`${a} - ${b} = ${a-b}`);
console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${a/b}`);
console.log(`${a} % ${b} = ${a%b}`);
console.log(`${a} + 1 = ${++a}`);
console.log(`1 + ${b} = ${++b}`);
console.log(`${a} ^ ${b} = ${a**b}`);