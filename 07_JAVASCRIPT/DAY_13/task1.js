//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]


//1. Find which district having highest +ve case?
console.log( covid_data.reduce((a,b)=> a[2]>b[2]?a:b)[1]);
//2. Find which district having highest 1st dose vaccine?
console.log( covid_data.reduce((a,b)=> a[5]>b[5]?a:b)[1]);
//3. Find which district having lowest death rate?
console.log( covid_data.reduce((a,b)=> a[3]<b[3]?a:b)[1]);
//4. Sort the data with +ve case in desending order
console.log( covid_data.sort((a,b)=>b[2]-a[2]) );
//5. sort district with 1st dose vaccine
covid_data.sort((a,b)=>b[5]-a[5]).forEach(data => console.log(data[1]))
//6. print total number of curred cases
console.log(covid_data.reduce((n1,n2)=> n1[4]+n2[4]));
//7. print total curred cases in Edukki
console.log(covid_data.find(dst=> dst[1]=='Idukki')[4]);
//8. Is any district having more than 27000 +ve cases -
covid_data.some( pc=> pc[2]>27000?console.log(pc):null)