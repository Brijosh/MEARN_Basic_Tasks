// function area(b,h) {
//     return 0.5*b*h;
// }
// console.log(area(5,12));

// let check=true;
// function prime(num) {
//     for(i=2;i<=num/2;i++)
//         {
//             if(num%i==0)
//                 {
//                     check=false;
                
//                 }
//         }
//     if(check==true)
//         {
//             return `${num} is a prime number`
//         }
//     else
//         {
//             return `${num} is not a prime number`
//         }
// }
// console.log(prime(47));



// function palindrome(str) {
//         rev='';
//         for(i=str.length-1;i>=0;i--)
//             {
//                 rev=rev+str[i];
//             }
//         if(str==rev)
//             {
//                 return `${str} is a palindrome`
//             }
//         else
//             {
//                 return `${str} is not a palindrome`
//             }

// }
// console.log(palindrome('malayalam'));


// const multi= function(x,y){
// return x*y;
// }
// console.log(multi(5,7));


// const square = (num) => num**2;
// console.log(square(4));

// function fibonacci(n) { 
// 	if (n <= 1) { 
// 		return n; 
// 	} 
// 	return fibonacci(n - 1) + fibonacci(n - 2); 
// } 

// // Printing n fibonacci sequence 
// n = 10 

// for (let i = 0; i < n; i++) { 
// 	console.log(fibonacci(i)); 
// };

// const temp = (num) => ((num*9/5) + 32);
// console.log(temp(37));

const hello = () => `Hello There!! Good Morning`;
console.log(hello());