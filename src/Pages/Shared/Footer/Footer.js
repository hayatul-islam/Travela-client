import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <div>
                            <h3>Travela</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='pt-5'>
                                <span><i class="fa-brands fa-twitter"></i></span>
                                <span><i class="fa-brands fa-facebook"></i></span>
                                <span><i class="fa-brands fa-instagram"></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3>Information</h3>
                            <li>About</li>
                            <li>Service</li>
                            <li>Trams and Conditions</li>
                            <li>Become a partner</li>
                            <li>Best Price Guarantee</li>
                            <li>Privacy and Policy</li>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3>Customer Support</h3>
                            <li>FAQ</li>
                            <li>Payment Option</li>
                            <li>Booking Tips</li>
                            <li>How it works</li>
                            <li>Contact Us</li>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3>Have a Questions?</h3>
                            <div className='footerContact'>
                                <div className='d-flex flex'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fa-solid fa-phone"></i>
                                    <p>+2 392 3929 210</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='pt-5 mt-5 text-center'>
                    <p>Copyright ©2022 All rights reserved | This template is made with  by Travela</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;