var num1=12;
var num2=36;
result=Math.min(num1,num2);
for(i=result;i>0;i--)
    {
        if(num1%i==0 && num2%i==0)
            {
                console.log(`HCF(${num1},${num2})= ${i}`);
                break;
            }
    }
let hcf="";
for(i=num1;i>0;i--)
    {
        if(num1%i==0)
            {        
                hcf=hcf+i+",";
            }
    }
console.log(`${num1}={${hcf}}`);


hcf="";
for(i=num2;i>0;i--)
    {
        if(num2%i==0)
            {        
                hcf=hcf+i+",";
            }
    }
console.log(`${num2}={${hcf}}`);