// let even=[]
// for(let i=1;i<=20;i++)
//     {
//         if(i%2==0)
//             even.push(i)
//     }
// console.log(even);


// let arr=[10,25,67,45,70,36,50];
// let newarr=[];
// for(let i of arr)
//     {
//         if (i%10==0)
//             {
//                 newarr.push(i);
//             }
//     }
// console.log(newarr);


// let num= [3,4,5,6,7] ;
// let square=[];
// for( let i of num)
//     {
//         square.push(i**2)
//     }
// console.log(square);

// function dupe(num)
// {
//    let newNum=[];
//    for(let i in num)
//     {
//         if(newNum.indexOf(num[i])=== -1)
//             newNum.push(num[i])
//     }
//     return newNum
// }
// let num=[1,1,2,3,5,2,4,2,3]
// console.log(dupe(num));

// let num=[10,20,30,40,50,60,70,80,90]
// let left=0;
// let right=num.length-1;
// while(left<right)
//     {
//         let temp=num[left]
//         num[left]=num[right]
//         num[right]=temp

//         left++;
//         right--
//     }
// console.log(num);

// function intercept(arr1,arr2)
// {
//     let intercept=[];
//     for(let i of arr1)
//         {
//             if(arr2.includes(i) && !intercept.includes(i))
//                 {
//                     intercept.push(i)
//                 }
//         }
//     return intercept;
// }
// let arr1=[1,2,3,4,5,6,7,8,9,10,11]
// let arr2=[2,4,6,9,10,11,40,12]
// console.log(intercept(arr1,arr2));


// function falsy(values)
// {
//     let result=[];
//     for(let i in values)
//         {
//             if(values[i])
//             {
//                 result.push(values[i])
//             }
//         }
//     return result;
// }
// let arr=[1,'a',"hello",true, false, NaN, null,24,undefined]
// console.log(falsy(arr));


// function shuffle(nums)
// {
//     for(let i = nums.length-1;i>0;i--)
//         {
//             let randomIndex = Math.floor(Math.random() * (i + 1));

//             var temp=nums[i]
//             nums[i]=nums[randomIndex]
//             nums[randomIndex]=temp

//         }
//         return nums
// }
// let array = [1, 2, 3, 4, 5,6];
// console.log(shuffle(array));

function diff(arr1,arr2)
{
    let diff=[];
    for(let i of arr1)
        {
            if(!arr2.includes(i) && !diff.includes(i))
                {
                    diff.push(i)
                }
        }
    return diff;
}
let arr1=[1,2,3,4,5,6,7,8,9,10,11]
let arr2=[2,4,6,9,10,11,40,12]
console.log(diff(arr1,arr2))