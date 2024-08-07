import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <>
         <Navbar className="bg-body-tertiary fw-bold px-5 d-flex justify-content-between">
        
          <Navbar.Brand href="#home" className='fs-2 text-info'>
            <img
              alt=""
              src="https://img.freepik.com/free-vector/hand-drawn-cassette-tape-outline-illustration_23-2150926291.jpg?t=st=1723018566~exp=1723022166~hmac=0c63faad808068c5839d6ecf2e429bcfeef6db516499e2bb554166404603de98&w=740"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            CinePro Media Player
          </Navbar.Brand>
          <Button variant="info" className='px-4 fs-5 fw-semibold'>Get Started</Button>{' '}
          </Navbar>

    </>
    )
}

export default Header