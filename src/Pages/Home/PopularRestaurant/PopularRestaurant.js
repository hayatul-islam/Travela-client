
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const PopularRestaurant = () => {

    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('restaurant.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className='pb-5'>
            <Container className="sectionContainer">
                <div className='py-5'>
                    <p>Special Offers</p>
                    <h2><span className='fw-bold'>Popular</span> <span className='fw-normal'>Restaurants</span></h2>
                </div>

                <div>
                    <CardGroup className='gridContainer gridContainerFour'>
                        {
                            tours?.map(tour => <Card className='gridCard' key={tour?._id}>
                                <div className='gridImg'>
                                    <Card.Img variant="top" src={tour?.image} />
                                    <div className="gridSearchIcon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>

                                <Card.Body>
                                    <Card.Title>
                                        <div>
                                            <span className='fw-normal'>{tour?.name}</span>
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
                                    <hr style={{ background: '#d5b9b9' }} />
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
            </Container>
        </div>
    );
};

export default PopularRestaurant;