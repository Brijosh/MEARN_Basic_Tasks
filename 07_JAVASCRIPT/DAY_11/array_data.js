//[id,name,designation,location,salary,experience]
employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1008,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name 
for(i of employee)
    {
        console.log(i[1]);
    }

//2 Print total number of employee
console.log(`\nTotal number of employee : ${employee.length} \n`);
//3 Print developer employee details
for(i of employee)
    {
        if(i[2]=='Developer')
            {
                console.log(i);
            }
    }
    console.log();
//4 Print all employee details whose salary > 30000
for(i of employee)
    {
        if(i[4]>30000)
            {
                console.log(i);
            }
    }
    console.log();
//5 Print details of employee Laisha
for(i of employee)
    {
        if(i[1]=='Laisha')
            {
                console.log(i);
            }
    }
    console.log();
//6 Sort employee based on descending order of salary

let num=employee.sort((emp1,emp2)=> emp2[4]-emp1[4]);
console.log(num);

//7 sort employee based on ascending order of experience
let num2=employee.sort((emp1,emp2)=> emp1[4]-emp2[4]);
console.log(num);