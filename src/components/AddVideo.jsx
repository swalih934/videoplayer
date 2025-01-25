import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Addvideo } from '../services/AllApis';
function AddVideo({response}) {
    const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    VideoId:"",Vtitle:"",imageUrl:"",vUrl:""
})

const handleUpload=async()=>{
  console.log(video);
  const {VideoId,Vtitle,imageUrl,vUrl}=video
  if(!VideoId || !Vtitle || !imageUrl || !vUrl){
    alert("Enter valid Inputs")
  }
  else{
    try{
      const videoUrl=vUrl.split("v=")[1]

      const eurl=`https://www.youtube.com/embed/${videoUrl}?si=I705wTJJH1Q0Cs6_`
      video.vUrl=eurl

      const res=await Addvideo(video)
      console.log(res);
      if(res.status==201){
        alert("Upload Successfull")
        handleClose()
        response()

      }else{
        alert("Something Wnt Wrong!!")
      }
      
    }
    catch(err){
      console.log(err);
      alert("Upload Failed")
      
    }
   
  }

}

    const handleClose = () => {
      setShow(false);
    setVideo(  {
      VideoId:"",Vtitle:"",imageUrl:"",vUrl:""
  })
    }
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
        <Form.Control type="text" placeholder="video id"  onChange={(e)=>(setVideo({...video,VideoId:e.target.value}))}/>
      </FloatingLabel>
      <FloatingLabel controlId="vTitle" label="vtitle"  className="mb-3">
        <Form.Control type="text" placeholder="Title" onChange={(e)=>(setVideo({...video,Vtitle:e.target.value}))}/>
      </FloatingLabel>
      <FloatingLabel controlId="imageURL" label="ImageUrl"  className="mb-3">
        <Form.Control type="text" placeholder="Url" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="VUrl" label="vUrl">
        <Form.Control type="text" placeholder="Url" onChange={(e)=>{setVideo({...video,vUrl:e.target.value})}} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

</>  )
}

export default AddVideo