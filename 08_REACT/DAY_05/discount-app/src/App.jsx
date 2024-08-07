import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function App() {
const [originalPrice,setOriginalPrice]=useState(0);
const [discountRate,setDiscountRate]=useState(0);
const [discountedPrice,setDiscountedPrice]=useState(0)
console.log(originalPrice,discountRate,discountedPrice);
const handleDiscount=()=>{
  setDiscountedPrice(originalPrice-(originalPrice*discountRate/100))
}
const handleReset=()=>{
  setDiscountRate('')
  setDiscountedPrice('')
  setOriginalPrice('')
}
  return (
    <>
      <div className='mt-5 w-75 shadow w rounded-4 p-5 mx-auto' style={{ backgroundColor: '#f7fff7' }}>
        <h1 className='fw-bold text-center ' style={{ color: '#0f0326' }}>Discount Calculator</h1>
        <div className='d-flex justify-content-around '>
          <div className='mt-5 '>
            <div className='p-5  border rounded-3 d-flex flex-column'>
              <h4 className='fw-semibold mb-5'>Enter the original price and the discount rate 🛒</h4>

              <TextField id="outlined-basic" type='number' onChange={e=> setOriginalPrice(e.target.value)} label="Original Price" variant="outlined" className='mb-4 fw-bold' />
              <TextField id="outlined-basic" type='number' onChange={e=> setDiscountRate(e.target.value)} label="Discount Rate" variant="outlined" className='mb-4 fw-bold' />

              <div className='d-flex justify-content-between'>
                <Button variant="contained" onClick={handleDiscount} className='bg-success fw-bold py-2'>Calculate</Button>
                <Button variant="outlined" onClick={handleReset} className=' fw-bold py-2'>Reset</Button>

              </div>
            </div>

          </div>
          <div className='mt-5 '>
            <div className='p-5 border rounded-3 d-flex flex-column h-100 justify-content-around'>
              <div>
              <h3 className='fw-semibold mb-2 text-center'>The Final Price After </h3>
              <h3 className='fw-semibold mb-5 text-center mx-5 px-5'>{discountRate}% discount on ₹{originalPrice} is:</h3>
          
              </div>
              
              <h1 className='text-success mb-5 fw-bold text-center' style={{fontSize:'3.5rem'}}>₹{discountedPrice}</h1>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
