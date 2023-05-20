import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { array, caroT, caroT2, caroT3, carott2,carott22,  carottt, cartt33t, cartt34t, cartt3t, cor, cor2, data, labro, labro2, list, lorem, mainlist, uall, uall2, why } from './utill'
import { array2 } from './utill'
import { name } from './utill'
import { nob } from './utill'
import './About.css'

const About = () => {
  // const{
  //   main,sub
  // } = props.firstarray

  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>{array}</h2>
            <p>
              {array2}
            </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-7 position-relative about-img"
              style={{ backgroundImage: "url(assets/img/about.jpg)" }}
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="call-us position-absolute">
                <h4>{name}</h4>
                <p>{nob}</p>
              </div>
            </div>
            <div
              className="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                 {list}
                </p>
                <ul>
                  <li>
                   
                    <p> {mainlist}</p>
                  </li>

                </ul>
              
                <br />
                <br />
                <br />
                <div className="position-relative mt-5">
                  <img
                    src="assets/img/about-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox play-btn"
                  />
                </div>
                <p className='data'>{data}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="why-box">
                <h3>{why}</h3>
                <p>
                  {lorem}
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">
                    Learn More <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8 d-flex align-items-center">
              <div className="row gy-4">
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data" />
                    <h4>{cor}</h4>
                    <p>
                    {cor2}
                    </p>
                  </div>
                </div>
               
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem" />
                    <h4>{uall}</h4>
                    <p>
                    {uall2}
                    </p>
                  </div>
                </div>
               
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes" />
                    <h4>{labro}</h4>
                    <p>
                    {labro2}
                    </p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <br /><br /><br />

      {/* <section id="about">
        <div className="container" data-aos="fade-up">
        
          <div className='Con-back-img  imgg' ></div>
         
        </div>
      </section> */}
      <Container>
        <Row>
          <Col sm={6}>
            <div className='backimg'>

            </div>

          </Col>
          <Col SM={6}>
            <Carousel>
              <Carousel.Item>
                <h1>{caroT}</h1>
                <h3>{caroT2}.</h3>
                <p>{caroT3}.</p>
                

              </Carousel.Item>
              <Carousel.Item>
              <h1>{carott2}</h1>
                <h3>{carott22}.</h3>
                <p>{carottt}.</p>

              </Carousel.Item>
              <Carousel.Item>

              <h1>{cartt3t}</h1>
                <h3>{cartt33t}.</h3>
                <p>{cartt34t}.</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default About