import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
<>
<Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{cursor:'pointer'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLQJwV0oaHe8bKKBn7oRMOzdc7ThlWbcm5A&s" />
      <Card.Body>
        <Card.Title>Barcelona Vs Real madrid</Card.Title>
      
        <Button variant="btn"><i className="fa-solid fa-trash" style={{color: "#aa0325",}} /></Button>
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Barcelona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="470" height="315" src="https://www.youtube.com/embed/jzp0cAy41-o?si=DexVvdTIDQ7nXjSm&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</>  )
}

export default VideoCard