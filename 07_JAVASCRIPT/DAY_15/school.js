class Luminar
{
    constructor(name,clsroom,percent,roll)
    {
        this.stdName=name;
        this.stdClass=clsroom;
        this.stdRank=percent;
        this.stdId=roll;
        console.log(` \nStudent details reccived`);
    }
    printStudent()
    {
        console.log(`Student name : ${this.stdName}`);
        console.log(`Roll no. : ${this.stdId}`);
        console.log(`Class : ${this.stdClass}`);
        console.log(`Total Percent : ${this.stdRank}`);
    }
}

std= new Luminar('Ramesh','C16','75%',15);
std.printStudent();

std1= new Luminar('Shanthan','C16','88%',21);
std1.printStudent();