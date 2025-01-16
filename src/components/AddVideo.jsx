import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddVideo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<div>
    <button onClick={handleShow} className='btn '><i className="fa-solid fa-plus" beat size="2xl" style={{color: "#63E6BE",}} /></button>
</div>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInput"  label="Video Id"  className="mb-3"  >
        <Form.Control type="text" placeholder="video id" />
      </FloatingLabel>
      <FloatingLabel controlId="vTitle" label="vtitle"  className="mb-3">
        <Form.Control type="text" placeholder="Title" />
      </FloatingLabel>
      <FloatingLabel controlId="imageURL" label="ImageUrl"  className="mb-3">
        <Form.Control type="text" placeholder="Url" />
      </FloatingLabel>
      <FloatingLabel controlId="VUrl" label="vUrl">
        <Form.Control type="text" placeholder="Url" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>

</>  )
}

export default AddVideo