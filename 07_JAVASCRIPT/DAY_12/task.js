//[id,name,designation,location,salary,experience]
employee=[
    [1000,'Neel','Developer','Kochi',25000,3],
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
// console.log(employee.map(num => num[1]));




//2 Print total number of employee
// i=0
// employee.forEach(p=> i++)
// console.log(i);



//3 Print developer employee details
// console.log(employee.filter(p=> p[2]=='Developer'));




//4 Print all employee details whose salary > 30000
// console.log(employee.filter(s => s[4]>30000));




//5 Print details of employee Laisha
// console.log(employee.find(n => n[1]=="Laisha"));

//6 Sort employee based on descending order of salary

// console.log( employee.sort((a,b)=>b[4]-a[4]));

//7 sort employee based on ascending order of experience?
console.log( employee.sort((a,b)=>a[5]-b[5]));
