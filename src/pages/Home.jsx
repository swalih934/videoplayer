import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import Videos from '../components/Videos'
import Catogery from '../components/Catogery'
import { Link } from 'react-router-dom'
function Home() {
  return (
<>
<div  className='d-flex justify-content-between mt-4 p-3 text-light'>
        <h4>All Videos</h4>
        <Link style={{color:'light'}} to={'/his'}> Watch History</Link>
    
</div>    <div className='p-4 container-fluid'>
<Row>
    <Col sm={12} md={1}>
    <AddVideo/>
    </Col>
    <Col sm={12} md={8}>
    <Videos/>
    </Col>
    <Col sm={12} md={3}>
    <Catogery/>
    </Col>
</Row>
 </div>
</>  )
}

export default Home