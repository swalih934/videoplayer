import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
<>

<div className=' container-fluid' >
<Row className='p-5'>
<Col sm={12} md={5}>
<h4 style={{color:'white'}}>Video Player-2024</h4>
<p style={{textAlign:'justify'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptas quisquam quia, voluptates ab officiis est corporis suscipit incidunt, provident iure iusto vitae et nam repellat nihil molestiae maxime. Eveniet!</p>
</Col>
<Col sm={12} md={2}>
<div className='d-flex flex-column '>

<h4>Links</h4>
    <Link to={'/'}>Landing</Link>
    <Link to={'/home'}>Home</Link>
    <Link to={'/his'}>History</Link>
    
</div></Col>
<Col sm={12} md={5}>
<h4>FeedBack</h4>
<textarea name="" className='form-control' id=""></textarea>
<button className='btn btn-info mt-4'>Submit</button>
</Col>

</Row>
<h6 className='text-center my-2'>videoplayer 2025 &copy; All Right reserved</h6>
</div>
</>  )
}

export default Footer