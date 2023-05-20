import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { breakf, dinner, lunch, menu, our3, ours, ours2, starter } from './utill';

const Menu = () => {
    return (
        <>
            <section id="menu" className="menu">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>{ours}</h2>
                        <p>
                            {ours2} <span>{our3}</span>
                        </p>
                    </div>
                    <ul
                        className="nav nav-tabs d-flex justify-content-center"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link active show"
                                data-bs-toggle="tab"
                                data-bs-target="#menu-starters"
                            >
                                <h4>{starter}</h4>
                            </a>
                        </li>
                        {/* End tab nav item */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#menu-breakfast"
                            >
                                <h4>{breakf}</h4>
                            </a>
                            {/* End tab nav item */}
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#menu-lunch"
                            >
                                <h4>{lunch}</h4>
                            </a>
                        </li>
                        {/* End tab nav item */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#menu-dinner"
                            >
                                <h4>{dinner}</h4>
                            </a>
                        </li>
                        {/* End tab nav item */}
                    </ul>
                    <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
                        <div className="tab-pane fade active show" id="menu-starters">
                            <div className="tab-header text-center">
                                <p>{menu}</p>
                                <h3>{starter}</h3>
                            </div>
                            <div className="row gy-5">
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-1.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Magnam Tiste</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$5.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-2.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-2.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Aut Luia</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$14.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-3.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-3.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Est Eligendi</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$8.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-4.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-4.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-5.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-5.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-6.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-6.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Laboriosam Direva</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$9.95</p>
                                </div>
                                {/* Menu Item */}
                            </div>
                        </div>
                        
                        {/* End Starter Menu Content */}





                        
                        <div className="tab-pane fade" id="menu-breakfast">
                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3>Breakfast</h3>
                            </div>
                            <div className="row gy-5">
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-1.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Magnam Tiste</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$5.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-2.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-2.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Aut Luia</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$14.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-3.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-3.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Est Eligendi</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$8.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-4.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-4.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-5.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-5.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-6.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-6.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Laboriosam Direva</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$9.95</p>
                                </div>
                                {/* Menu Item */}
                            </div>
                        </div>
                        {/* End Breakfast Menu Content */}
                        <div className="tab-pane fade" id="menu-lunch">
                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3>Lunch</h3>
                            </div>
                            <div className="row gy-5">
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-1.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Magnam Tiste</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$5.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-2.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-2.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Aut Luia</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$14.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-3.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-3.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Est Eligendi</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$8.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-4.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-4.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-5.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-5.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-6.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-6.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Laboriosam Direva</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$9.95</p>
                                </div>
                                {/* Menu Item */}
                            </div>
                        </div>
                        {/* End Lunch Menu Content */}
                        <div className="tab-pane fade" id="menu-dinner">
                            <div className="tab-header text-center">
                                <p>Menu</p>
                                <h3>Dinner</h3>
                            </div>
                            <div className="row gy-5">
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-1.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Magnam Tiste</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$5.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-2.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-2.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Aut Luia</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$14.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-3.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-3.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Est Eligendi</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$8.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-4.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-4.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-5.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-5.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$12.95</p>
                                </div>
                                {/* Menu Item */}
                                <div className="col-lg-4 menu-item">
                                    <a href="assets/img/menu/menu-item-6.png" className="glightbox">
                                        <img
                                            src="assets/img/menu/menu-item-6.png"
                                            className="menu-img img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <h4>Laboriosam Direva</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">$9.95</p>
                                </div>
                                {/* Menu Item */}
                            </div>
                        </div>
                        {/* End Dinner Menu Content */}
                    </div>
                </div>
            </section>
            {/* End Menu Section */}



            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2 className='center'>Testimonials</h2>
                        <p className='center2'>
                            What Are They <span>Saying About Us</span>
                            <hr />
                        </p>
                    </div>
                    <section id="testimonials" className="testimonials">
                        <div className="container" data-aos="fade-up">
                            <div className="section-header">
                               
                            </div>
                            <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
                                <Carousel>
                                    <Carousel.Item>


                                        <center>  <p className='star'>★★★★★★★★★</p></center>

                                        <p className='pro'>  Proin iaculis purus consequat sem cure digni ssim donec
                                            porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                        <div className='testimonials1'>
                                            <img
                                                src="assets/img/testimonials/testimonials-1.jpg"
                                                className="testimonial-img testimonials2"
                                                alt="" />
                                        </div>
                                        <h3 className='saul'>Saul Goodman</h3>
                                        <h4 className='saul'>Ceo &amp; Founder</h4>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <center>  <p className='star'>★★★★★★★★★</p></center>

                                        <p className='pro'>  Proin iaculis purus consequat sem cure digni ssim donec
                                            porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                        <div className='testimonials1'>
                                            <img

                                                src="assets/img/testimonials/testimonials-2.jpg"
                                                className="testimonial-img testimonials2"
                                                alt="" />
                                        </div>
                                        {/* <center> */}
                                        <h3 className='saul'>Shreem Ghoshal</h3>
                                        <h4 className='saul'>Ceo &amp; Founder</h4>
                                        {/* </center> */}

                                    </Carousel.Item>

                                    <Carousel.Item>

                                        <center>  <p className='star'>★★★★★★★★★</p></center>
                                        <p className='pro'>  Proin iaculis purus consequat sem cure digni ssim donec
                                            porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                                            eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                        <div className='testimonials1'>
                                            <img
                                                src="assets/img/testimonials/testimonials-3.jpg"
                                                className="testimonial-img testimonials2"
                                                alt="" />
                                        </div>
                                        <h3 className='saul'>Josef</h3>
                                        <h4 className='saul'>Ceo &amp; Founder</h4>

                                    </Carousel.Item>
                                </Carousel>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </section>



                    <div
                        className="slides-1 swiper"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>

















        </>
    )
}

export default Menu