import React from 'react'

function StudentData({studentName,isPresent}) {
//destructuring props: props:{studentName,ispresent}=> {studentName,isPresent}


    // Child component
      return (
    <div style={{width:'500px',height:'400px',backgroundColor:'pink'}}>
      <h1 style={{textAlign:'center'}}>StudentData</h1>
      <h3>Student Name :{studentName}</h3>
      <h3>Student Status : {isPresent?"active":"inactive"}</h3>
    </div>
  )
}

export default StudentData
