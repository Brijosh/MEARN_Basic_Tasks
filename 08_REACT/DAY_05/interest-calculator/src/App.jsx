import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  // to hold
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)
  // after  calculating
  const [interest,setInterest]=useState(0)
  
  const handleInterest=()=>{
    const output=amount*year*rate/100
    setInterest(output)
  }
const handleReset=()=>{
  setAmount(0)
  setInterest(0)
  setRate(0)
  setYear(0)
}

  return (
    <>
      <div className='row'>
        <div className='border w-50 rounded rounded-4 shadow mx-auto p-5 text-center mt-5' style={{ backgroundColor: 'rgba(24, 242, 178,0.900)' }}>
          <h1 className='fw-bold'>Simple interest calculator</h1>
          <h3>Calculate your simple interest💝</h3>
          <div className='my-4'>
            <h1 className='fw-bold'>₹ {interest}</h1>
          </div>
          {/* input */}
          <div className='d-flex justify-content-around flex-column w-50 mx-auto'>
            <TextField onChange={e=>setAmount(e.target.value)} value={amount} id="outlined-basic" label="Amount" variant="outlined" className='mb-4' />
            <TextField onChange={e=>setYear(e.target.value)} value={year} id="outlined-basic" label="Year" variant="outlined" className='mb-4' />
            <TextField onChange={e=>setRate(e.target.value)} value={rate} id="outlined-basic" label="Rate" variant="outlined" className='mb-4' />
          </div>
          {/* Button */}
          <div className='w-50 mx-auto d-flex justify-content-around'>
          <Button onClick={handleInterest} variant="contained" color="primary" className='px-4 py-3'>Calculate</Button>
          <Button onClick={handleReset} variant="contained" color="warning" className='px-4 py-3'>Reset</Button>
          </div>
        </div>


      </div>

    </>
  )
}

export default App
