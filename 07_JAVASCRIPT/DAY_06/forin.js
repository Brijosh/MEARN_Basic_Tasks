const student={
    sname: 'chandler',
    class:12,
    age :14
}
console.log(student);
console.log(student.sname);
console.log(student['age']);

for(key in student)
    {
        console.log(`${key} => ${student[key]}`);
    }
const salaries={
    Jack: 240,
    Paul : 340,
    Monica : 550
}

for(key in salaries)
    {
        console.log(`${key} : $${salaries[key]}`);
     }