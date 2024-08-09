import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaFilm } from "react-icons/fa6";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '26rem' }} className='shadow-lg'>
        <Card.Img variant="top" src="https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg" onClick={handleShow} height={416} width={416} style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Interstellar</Card.Title>
          <Button variant="primary fs-5"><MdDelete /></Button>
        </Card.Body>
      </Card>
      <>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title><FaFilm className='me-2' />
            Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Video image" className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Image" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Video URL" className="mb-3"
          >
            <Form.Control type="text" placeholder="Video URL" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default VideoCard