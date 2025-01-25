import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import Videos from '../components/Videos'
import Catogery from '../components/Catogery'
import { Link } from 'react-router-dom'
function Home() {


  const [username,setUsername]=useState("")
  useEffect(()=>{
    const user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
//state lifting (for avoid refresh when adding a video)
  const [addResponse,SetAddResponse]=useState("")
  return (
<>
<h4 className='ms-4 pt-4'>welocome                     {username}</h4>
<div  className='d-flex justify-content-between mt-4 p-3 text-light'>
        <h4>All Videos</h4>
        <Link style={{color:'light'}} to={'/his'}> Watch History</Link>
    
</div>    <div className='p-4 container-fluid'>
<Row>
    <Col sm={12} md={1}>
    <AddVideo response={SetAddResponse} />
    </Col>
    <Col sm={12} md={8}>
    <Videos add={addResponse}/>
    </Col>
    <Col sm={12} md={3}>
    <Catogery/>
    </Col>
</Row>
 </div>
</>  )
}

export default Home