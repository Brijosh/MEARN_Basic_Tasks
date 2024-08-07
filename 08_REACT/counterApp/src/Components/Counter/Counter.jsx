import React from 'react'
import { useState,useEffect } from 'react'

import { MDBBtn } from 'mdb-react-ui-kit';

function Counter() {
    const [counter, setCounter] = useState(0);
    
    // const handleIncrement=()=>{
    //     setCounter(counter+1)
    // }
    // const handleDecrement=()=>{
    //     setCounter(counter-1)
    // }
    // const handleReset=()=>{
    //     setCounter(0)
    // }
    
    // const autoCount=()=>{
       
       
    // }
    useEffect(()=>{
        
        setInterval(() => { setCounter(n => n + 0.5)}, 1000);

    },[])

  return (
    <div class='m-5 m-5' style={{width:'50rem'}}>
      <h1>{counter}</h1>
      <div class='p-5 d-flex justify-content-around' >
        {/* <MDBBtn onClick={handleIncrement}>Increment</MDBBtn>
        <MDBBtn onClick={handleReset}>Reset</MDBBtn>
        <MDBBtn onClick={handleDecrement}>Decrement</MDBBtn> */}
      </div>
    </div>
  )
}

export default Counter
