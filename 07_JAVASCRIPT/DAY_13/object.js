//Create a student object having properties as id,name,course,totalmark,year
const student={
    id : 10,
    name : "amal",
    course :"MEARN STACK",
    totalMark : 85,
    year: 2024
}
//1 Print name of student object
// console.log(student.name);

//2 Check rank key is present in student object
// console.log("rank" in student?'rank is present in student':'rank is not present in student');

//3 add qualifed for higher education or not and update 
// student.higherEducation="Qualified";
// console.log(student);

//4 Mark incremented by 10 
// student.totalMark+=10;
// console.log(student);

//5 Print details of student object one by one
for(let key in student)
    {
        console.log(`${key} : ${student[key]}`);
    }












// text="one two one two one"

// arr= text.split(' ');

// number={};

// arr.map(word=> word in number?number[word]+=1:number[word]=1)

// console.log(number);