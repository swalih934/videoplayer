import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getData } from '../services/AllApis'
function Videos({add}) {

  const [video, setVideo] = useState([])
  //state lift for this videos file is  parent of videocard 
  const [delResponse,SetDelResponse]=useState("")

  useEffect(() => {
    getVideo()
  }, [add,delResponse])

  const getVideo = async () => {
    const res = await getData()
    console.log(res);
    if (res.status == 200) {
      setVideo(res.data)
    }

  }
  return (
    <>
      <div className='border border-3 shadow p-5 mb-3'>
        {
          video.length>0?
          <Row>
            {video.map(item=>(
                <Col>
                <VideoCard videos={item} response={SetDelResponse}/>
              </Col>
            ))}
        
        </Row>
        :
        <h4 className='text-center text-info'>Nno video Available</h4>
        }
       
      </div>

    </>)
}

export default Videos