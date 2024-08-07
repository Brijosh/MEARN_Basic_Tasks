import './App.css'
import StudentData from './assets/Components/StudentData'

function App() {
  // Parent component
  const sName='Ramesh'
  return (
    <>
      <h1>Student Name : {sName}</h1>
      <StudentData studentName={sName} isPresent={false}/>
    </>
  )
}

export default App
