import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Addcategory } from '../services/AllApis';
import Categorylist from './Categorylist';
function Catogery() {
    const [show, setShow] = useState(false);
  const [catogery,AddCategory]=useState({
    categoryId:"",title:"",videos:[]
  })
const [addResponse,SetAddResponse]=useState("")
  const handleCategory= async()=>{
    console.log(catogery);
    const {categoryId,title}=catogery
    if(!categoryId || !title){
      alert("enter valid inputs")

    }else{
      const result= await Addcategory(catogery )
      console.log(result);
      if(result.status==201){
        alert("category added")
        handleClose()
        Addcategory({
          categoryId:"",title:"",videos:[]
        })
        SetAddResponse(result)
      }else{
        alert("category added failed")
      }
      
    }

    
  }
    const handleClose = () => 
      setShow(false)
   
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
        <Form.Control onChange={(e)=>{AddCategory({...catogery,categoryId:e.target.value})}} type="text" placeholder="category id" />
      </FloatingLabel>
      <FloatingLabel controlId="CTitle" label="Ctitle"  className="mb-3">
        <Form.Control onChange={(e)=>(AddCategory({...catogery,title:e.target.value}))} type="text" placeholder="Title" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <Categorylist response={addResponse}/>
</>  )
}

export default Catogery