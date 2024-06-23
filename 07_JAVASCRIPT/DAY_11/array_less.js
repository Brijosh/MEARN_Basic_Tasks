//Nested Array
//print all elements, whose values are less than 10 in given array
a=[
    [1,2],
    [10,22],
    [14,21],
    [3,6],
    [5,9],
    [19,28],
]
for(i of a)
    {
        for(j of i)
            {
                if(j<10)
                    {
                        
                        console.log(j);
                    }

            }
    }