import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
      <MDBFooter className='text-center text-white ' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f fs-3 fw-semibold' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter fs-3 fw-semibold' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google fs-3 fw-semibold' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram fs-3 fw-semibold' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin fs-3 fw-semibold' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github fs-3 fw-semibold' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0100, 155, 200, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-dark' href='https://.com/'>
          CineProMediaPlayer
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
