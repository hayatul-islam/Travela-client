import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './OurTour.css';

const OurTour = () => {

    const [topTour, setTopTour] = useState([]);
    useEffect(() => {
        fetch('topTour.json')
            .then(res => res.json())
            .then(data => setTopTour(data))
    }, [])

    return (
        <div className='ourTour'>
            <Container className="sectionContainer">
                <div className='py-5'>
                    <p>Special Offers</p>
                    <h2><span className='fw-bold'>Top</span> <span className='fw-normal'>Tour Packages</span></h2>
                </div>
            </Container>
            <div className='miniSectionContainer'>
                <div>
                    <CardGroup className='gridContainer'>
                        {
                            topTour?.map(tour => <Card className='gridCard' key={tour?._id}>
                                <div className='gridImg'>
                                    <Card.Img variant="top" src={tour?.image} />
                                    <div className="gridSearchIcon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>

                                <Card.Body>
                                    <Card.Title>
                                        <div className="d-flex justify-content-between">
                                            <span className='fw-normal'>{tour?.name}</span> <span style={{ color: '#2f89fc' }}>${tour?.price}</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Text>
                                        {
                                            tour?.rating == '5' ?
                                                <div className='gridRating pt-3'>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span style={{ fontSize: '10px' }}>{tour?.rating} Rating</span>
                                                </div> :

                                                <div className='gridRating pt-3'>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                    <span style={{ fontSize: '10px' }}>{tour?.rating} Rating</span>
                                                </div>
                                        }
                                    </Card.Text>
                                    <Card.Text>
                                        <p>{tour?.description}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <p>{tour?.bookingTime}</p>
                                    </Card.Text>
                                    <hr />
                                    <Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i class="far fa-map"></i> {tour?.place}</span>
                                            <div className="tourBtn">Discover</div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }

                    </CardGroup>
                </div>
            </div>
        </div >
    );
};

export default OurTour;