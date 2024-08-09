import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function AddVideo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <FaCloudUploadAlt />

      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
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
    </div>
  )
}

export default AddVideo