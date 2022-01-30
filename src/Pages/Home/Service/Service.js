import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <div className='serviceContainer'>
            <Container>
                <CardGroup className='services'>
                    <Card>
                        <Card.Img variant="top"
                            src="https://i.ibb.co/nD0FTK7/mony-Back-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>
                                Best Price Guarantee
                            </Card.Title>
                            <Card.Text>
                                A small river named Duden flows by their place and supplies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top"
                            src="https://i.ibb.co/nD0FTK7/mony-Back-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>
                                Travellers Love Us
                            </Card.Title>
                            <Card.Text>
                                A small river named Duden flows by their place and supplies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top"
                            src="https://i.ibb.co/nD0FTK7/mony-Back-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>
                                Best Travel Agent
                            </Card.Title>
                            <Card.Text>
                                A small river named Duden flows by their place and supplies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top"
                            src="https://i.ibb.co/nD0FTK7/mony-Back-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>
                                Our Dedicated Support
                            </Card.Title>
                            <Card.Text>
                                A small river named Duden flows by their place and supplies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Service;