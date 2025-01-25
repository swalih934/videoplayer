import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo ,addHistory} from '../services/AllApis';
function VideoCard({videos,response}) {
    const [show, setShow] = useState(false);

    const handleDelete= async()=>{
      const res=await deleteVideo(videos.id)
      console.log(res);
      if(res.status==200){
      alert(" Video deleted")
      response(res)
      }else{
        alert("Failed")
      }
      
    }

    const handleClose = () => setShow(false);
    const handleShow =async () =>{ 
      setShow(true);
      const dt=new Date()
      const data={videoId:videos.VideoId,title:videos.Vtitle,url:videos.vUrl,dateTime:dt}
      console.log(data);
      const result=await addHistory(data)
      console.log(result);
      
    
    }
  
  return (
<>
<Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{cursor:'pointer'}} variant="top" height={'200px'} width={'200px'} src={videos?.imageUrl} />
      <Card.Body>
        <Card.Title>{videos?.Vtitle}</Card.Title>
      
        <Button onClick={handleDelete} variant="btn"><i className="fa-solid fa-trash" style={{color: "#aa0325",}} /></Button>
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos.Vtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="470" height="315" src={videos.vUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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