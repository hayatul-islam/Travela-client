import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './WhyChooseUs.css';

const WhyChooseUs = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    }

    return (
        <div className='whyChooseUsContainer sectionPadding'>
            <Container className='sectionContainer'>
                <Row>
                    <Col xs={12} md={6}>
                        <div>
                            <div>
                                <p>Best Directory Website</p>
                                <h2><span className='fw-bold'>Why</span> <span className='fw-normal'>Choose Us?</span></h2>
                                <div className='pt-4'>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                </div>
                                <div className='pt-4'>
                                    <button className='btn btn-outline-danger py-3 px-4 rounded-pill'>Read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <p>Testimony</p>
                            <h2><span className='fw-bold'>Our</span> <span className='fw-normal'>Guests Says</span></h2>
                        </div>
                        <Slider {...settings}>
                            <div className='Testimony d-flex mt-4'>
                                <div className='personImg'>
                                    <img src='https://sajeeb360.github.io/travela/images/person_2.jpg' />
                                    <div className='quote d-flex justify-content-center align-items-center'><i class="fa-solid fa-quote-left"></i></div>
                                </div>
                                <div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className='pt-5'>
                                        <p className='fw-bold pb-0 mb-0'>Dennis Green</p>
                                        <p>Guest from italy</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Testimony d-flex mt-4'>
                                <div className='personImg'>
                                    <img src='https://sajeeb360.github.io/travela/images/person_2.jpg' />
                                    <div className='quote d-flex justify-content-center align-items-center'><i class="fa-solid fa-quote-left"></i></div>
                                </div>
                                <div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className='pt-5'>
                                        <p className='fw-bold pb-0 mb-0'>Dennis Green</p>
                                        <p>Guest from italy</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Testimony d-flex mt-4'>
                                <div className='personImg'>
                                    <img src='https://sajeeb360.github.io/travela/images/person_2.jpg' />
                                    <div className='quote d-flex justify-content-center align-items-center'><i class="fa-solid fa-quote-left"></i></div>
                                </div>
                                <div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className='pt-5'>
                                        <p className='fw-bold pb-0 mb-0'>Dennis Green</p>
                                        <p>Guest from italy</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;