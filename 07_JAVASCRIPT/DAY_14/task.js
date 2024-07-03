// TASK : 
// You have an array of student data that contains their names and scores from different subjects. Your task is to calculate the average score for each student and display their names along with their average scores. 

const studentData = [
    { name: 'Sarin', scores: [85, 92, 78] },
    { name: 'Santi', scores: [76, 88, 91] },
    { name: 'Sayu', scores: [90, 85, 89] },
    { name: 'Anandi', scores:[93,90,89] }
  ];
  

//   Expected Output


            // Sarin: Average Score = 85.00
            // Santi: Average Score = 85.00
            // Sayu: Average Score = 88.00
            // Anandi: Average Score = 90.67

newData={}
for(let data of studentData)
    {
        let avg=0;
        let marks=data.scores;
        for(let key of marks)
            {
                avg+=key
            }
        newData[data.name]=`Average Score = ${avg/marks.length} `
    }
console.log(newData);