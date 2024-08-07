import './App.css'

function App() {
const handleAlert=()=>{
  alert("login Succesful")
}

const handleAgument=(details)=>{
  alert(details)
}

const handleInput=(details)=>{
  console.log(details.target.value);
}

  return (
    <>
     <div>HEllo world</div>
     <button onClick={handleAlert} style={{backgroundColor:'blue',color:'white' , padding:'16px'}}>Login</button>

     <button onClick={()=>handleAgument("login:username,password")}>Login</button>

     <input onChange={(e)=>handleInput(e)} type="text" placeholder='Enter Data'/>
    </>
  )
}

export default App
