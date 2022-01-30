import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <div className='serviceContainer'>
            <Container className='sectionContainer'>
                <CardGroup className='services'>
                    <Card>
                        <Card.Img variant="top"
                            src="https://i.ibb.co/nD0FTK7/mony-Back-removebg-preview.png" />
                        <Card.Body>
                            <Card.Title>
                                Best Price Guarantee
                            </Card.Title>
                            <Card.Text>
                                <p>A small river named Duden flows by their place and supplies.</p>
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
                                <p>A small river named Duden flows by their place and supplies.</p>
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
                                <p>A small river named Duden flows by their place and supplies.</p>
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
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Service;