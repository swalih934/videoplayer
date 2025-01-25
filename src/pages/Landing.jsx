import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className='container-fluid p-5  '>
                <Row>
                    <Col>
                        <h2>Video Player2025</h2>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam maiores, sed ratione possimus expedita vel beatae, consectetur delectus, nostrum ipsa aspernatur. Aspernatur dolores molestiae consequatur unde sit labore sapiente.</p>
                        <div className='d-grid'>
                            <Link className='btn btn-success' to={'/log'}>Go</Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
            <hr />
            <div className='container-fluid'>
                <h3 className='text-center mt-5'>Features</h3>
                <div className='p-4 d-flex  justify-content-around'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={"200px"} src="https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-8.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={"200px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKH0guuwdbzdPPcOSQPWARc-M5NIqR0LCFzhURQ0Yiiy67SI6ZjVkJnGvzBurJ1VypWCI&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={"200px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTsfl62co-ORtCy6vcbNh2MSafSLvZYdi4Sa-8UyASjtKdKyvsbGfEQWCNFjiJDTiQ2o&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr />
            <div className='p-5'>
                <Row>
                    <Col sm={12} md={7}>
                        <h4>abcd </h4>
                        <p style={{ textAlign: 'justify' }}>  Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fuga deserunt aut placeat quia earum nulla nemo harum numquam ut optio repudiandae corporis impedit obcaecati ratione distinctio, sed, esse minus?</p>
                    </Col>
                    <Col sm={12} md={5}>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/-2RAq5o5pwc?si=5amVUn0Ruj24gXLa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </div>
            <hr />
        </>

    )
}

export default Landing