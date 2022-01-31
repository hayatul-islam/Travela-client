import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const PopularHotelAndRoom = () => {

    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('hotelAndRoom.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return (
        <div className='pb-5'>
            <Container className="sectionContainer">
                <div className='py-5'>
                    <p>Special Offers</p>
                    <h2><span className='fw-bold'>Popular</span> <span className='fw-normal'>Hotels & Rooms</span></h2>
                </div>
            </Container>
            <div className='miniSectionContainer'>
                <div className=''>
                    <CardGroup className='gridContainer'>
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
                                        <div className="d-flex justify-content-between">
                                            <span className='fw-normal'>{tour?.name}</span> <span style={{ color: '#2f89fc' }}>${tour?.price}</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between align-items-center pt-3'>
                                        <div>
                                            {
                                                tour?.rating == '5' ?
                                                    <div className='gridRating'>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <span style={{ fontSize: '10px' }}>{tour?.rating} Rating</span>
                                                    </div> :

                                                    <div className='gridRating'>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                        <span style={{ fontSize: '10px' }}>{tour?.rating} Rating</span>

                                                    </div>
                                            }
                                        </div>
                                        <span style={{ fontSize: '12px', color: '#2f89fc' }}>/Night</span>

                                    </Card.Text>
                                    <Card.Text>
                                        <p>{tour?.description}</p>
                                    </Card.Text>
                                    <hr style={{ background: '#d5b9b9' }} />
                                    <Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i class="far fa-map"></i> {tour?.place}</span>
                                            <div className="tourBtn">Book Now</div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }

                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default PopularHotelAndRoom;