
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Articles.css';

const Articles = () => {

    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('articles.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className='pb-5 articles'>
            <Container className="sectionContainer">
                <div className='py-5'>
                    <p>Recent Blog</p>
                    <h2><span className='fw-bold'>Tips</span> <span className='fw-normal'> & Articles</span></h2>
                </div>

                <div className='article'>
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
                                    <Card.Text>
                                        <span className=''>{tour?.category}</span>
                                    </Card.Text>
                                    <Card.Title>
                                        <div>
                                            <h3 className='fw-normal'>{tour?.title}</h3>
                                        </div>
                                    </Card.Title>
                                    <Card.Text>
                                        <span>{tour?.date} Admin</span>
                                    </Card.Text>
                                    <Card.Text className='pb-3'>
                                        <span><i className="fas fa-file-alt"></i> {tour?.message}</span>
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

export default Articles;