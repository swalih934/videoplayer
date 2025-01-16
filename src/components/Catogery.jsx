import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Catogery() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<div className='d-grid'>
<button onClick={handleShow} className='btn btn-success'>Add catogery</button>
</div>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Catogery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInput"  label="catogery Id"  className="mb-3"  >
        <Form.Control type="text" placeholder="category id" />
      </FloatingLabel>
      <FloatingLabel controlId="CTitle" label="Ctitle"  className="mb-3">
        <Form.Control type="text" placeholder="Title" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
</>  )
}

export default Catogery