var num=4;
var i=1;
var j=1;
let str="";
while(i<=num)
    {

        str=str+num;
        i++;
        console.log(str);
    }



    console.log("");




    var num=4;
    var i=1;
    let str1="";
    while(i<=num)
        {
            var j=1;
            str1="";
            while(j<=4)
                {
                    str1=str1+i;
                    j++;
                }
                console.log(str1);
                i++;
        }

console.log("");



for(i=1;i<=4;i++)
    {
        str="";
        for(j=1;j<=4;j++)
            {
                str=str+"# ";
            }
            console.log(str);
    }


    console.log("");



for(i=1;i<=4;i++)
    {
        str="";
        for(j=1;j<=i;j++)
            {
                str=str+"* ";
            }
            console.log(str);
    }