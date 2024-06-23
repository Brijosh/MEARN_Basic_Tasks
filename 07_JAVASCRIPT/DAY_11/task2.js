var nestedArray =[
    [5,6,7,-2],
    [-5,-6,-7],
    [8,9,10],
    [3,5,2,1,4],
    [-3,5,2,1,],
    [4,2,6,8],
]

//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.
// function max(nestedArray)
// {
//     max=0
// for(i of nestedArray)
//     {
//         for(j of i)
//             {
//                 if(j>max)
//                     {
//                         max=j;
//                     }
//             }
//     }
//  return `Max : ${max}`;
// }
// console.log(max(nestedArray));

//2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.
// function avg(nestedArray)
// {
// sum=0;
// count=1;
// for(i of nestedArray)
//         {
//             for(j of i)
//                 {
//                     sum+=j;
//                     count++;
//                 }
//         }
//     return `Average : ${sum/count}`;
//     }
//     console.log(avg(nestedArray));

//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.
// function neg(nestedArray)
// {
// count=0
// for(i of nestedArray)
//     {
//         for(j of i)
//             {
//                 if(j<0)
//                     {
//                         count++;
//                     }
//             }
//     }
// return `Number of negetive numbers : ${count}`;
// }
// console.log(neg(nestedArray));


//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.
// function subsum(nestedArray)
// {

//     for(i of nestedArray)
//         {
//             let sum=0;
//             for(j of i)
//                 {
//                     sum+=j;
//                 }
//                 console.log(`Sum of [ ${i} ] : ${sum}`);
//             }
//         }
//         subsum(nestedArray)

//5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.
// function sort(nestedArray)
// {

//     for(i of nestedArray)
//         {
//             console.log(i.sort((c1,c2)=>c1-c2));
            
//         }
// }
// sort(nestedArray)

//6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.

// function flat(nestedArray)
// {

//     newarray=[];
//     for(i of nestedArray)
//         {
//             for(j of i)
//                 {
//                     newarray.push(j);
//                 }
//             }
//             return newarray;
// }
// console.log(flat(nestedArray));
            
//7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.
// function removeDuplicatesNested(arr) {
//     const seen = new Set();
  
//     return arr.map(innerArray => {
//       return innerArray.filter(item => {
//         if (!seen.has(item)) {
//           seen.add(item);
//           return true;
//         }
//         return false;
//       });
//     });
//   }
  
//   const result = removeDuplicatesNested(nestedArray);
//   console.log(result);  // Output: [ [ 5, 6, 7, -2 ], [ -5, -6, -7 ], [ 8, 9, 10 ], [ 3, 2, 1, 4 ], [ -3 ], [ 6 ] ]
  


//8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.
// function reverse(nestedArray) {
//     return nestedArray.map(innerArray => innerArray.reverse());
//   }
//   console.log(reverse(nestedArray));

//9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.
// function even(nestedArray) {
//     return nestedArray.map(innerArray => {
//       return innerArray.filter(item => item % 2 !== 0);
//     });
//   }
// console.log(even(nestedArray));
    

//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested 
function long(nestedArray)
{
    let min= nestedArray[0]
    
        for(i of nestedArray)
            {
                if(i.length>min.length)
                    {
                        min=i
                    }
            }
    return min
}
console.log(long(nestedArray));