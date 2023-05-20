import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Gallery = () => {
  return (
    <>
      <Container>
        <h1 className='gal'>Gallery</h1>
        <hr className='hrc' />
        <p className='new'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
        <Row>
          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/food.jpeg"
              />        </div>
          </Col>

          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/eve1.jpeg"
              />        </div>
          </Col>
          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/gallery-4.jpg"
              />        </div>
          </Col>
          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/gallery-3.jpg"
              />        </div>
          </Col>
          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/gallery-2.jpg"
              />        </div>
          </Col>
          
          <Col sm={4}>
            <div className='gallery'>
              <img className='gallery2'
                src="assets/img/gallery-1.jpg"
              />        </div>
          </Col>
          


        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}

export default Gallery