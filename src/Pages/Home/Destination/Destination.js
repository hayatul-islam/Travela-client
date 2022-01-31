import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Destination.css';

const Destination = () => {

    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('destination.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='py-5 destinations'>
            <Container className='sectionContainer'>
                <div>
                    <p>Featured</p>
                    <h2><span className='fw-bold'>Featured</span> <span className='fw-normal'>Destination</span></h2>
                </div>
                <div className='py-5 destinationSlider'>
                    <Slider {...settings}>
                        {
                            destinations?.map((destination, index) => <div
                                className='mb-5 descriptionContainer'
                                key={destination?._id}>
                                <div
                                    id={`dest${index + 1}`}
                                    className='destination'
                                >
                                    <div>
                                        <img className='w-100' src={destination?.image} alt="" />
                                    </div>
                                    <div className='pt-4 px-2'>
                                        <h5>{destination?.name}</h5>
                                        <p>{destination?.listing} listing</p>
                                    </div>
                                </div>
                                <div className="searchIcon">
                                    <i class="fas fa-search"></i>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>
            </Container>

        </div>
    );
};

export default Destination;