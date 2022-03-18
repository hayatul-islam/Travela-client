import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './SomeFun.css';

const SomeFun = () => {
    return (
        <div className='someFunContainer'>
            <Container className='sectionContainer'>
                <div className='text-center pb-5'>
                    <h1>Some fun facts</h1>
                    <p>More than 100,000 websites hosted</p>
                </div>
                <Row>
                    <Col xs={6} md={3}>
                        <div>
                            <h3><CountUp end={100000} /></h3>
                            <p>Happy Customers</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3><CountUp end={40000} /></h3>
                            <p>Destination Places</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3><CountUp end={87000} /></h3>
                            <p>Hotels</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div>
                            <h3><CountUp end={564000} /></h3>
                            <p>Restaurant</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SomeFun;