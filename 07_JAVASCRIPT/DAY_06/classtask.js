var n1=100;
var n2=21;
var n3=112;

if(n1>n2 && n1>n3)
    {
        console.log(`${n1} is larger`);
    }
else if(n2>n1 && n2>n3)
    {
        console.log(`${n2} is larger`);
    }
else
    {
        console.log(`${n3}is larger`);
    }

if(n1>n2&& n1>n3)
    {
        if(n2>n3)
            {
                console.log(n1,n2,n3);
            }
            else{
                console.log(n1,n3,n2);
            }
    }
    else if(n2>n1 && n2> n3)
        {
            if(n1>n3)
                {
                    console.log(n2,n1,n3);
                }
                else{
                    console.log(n2,n3,n1);
                }
        }
    else{
        if(n1>n2)
            {
                console.log(n3,n1,n2);
            }
            else
            {
                console.log(n3,n2,n1);
            }
    }