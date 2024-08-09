import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary px-5">
          <Navbar.Brand href="#home" ><h1 className='fw-bold text-light'>Black Heart Co.</h1></Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header