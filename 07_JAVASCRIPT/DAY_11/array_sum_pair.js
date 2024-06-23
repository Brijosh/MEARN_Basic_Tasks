var arr=[2,3,4,5,6,7,8,9]
counter=1
for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length;j++)
            {
                if(arr[i]+arr[j]==9)
                    {
                        console.log(`${arr[i]} + ${arr[j]} = 9`);
                    }
                    counter++;
            }
    }
console.log(`Iteration count : ${counter} \n`);