import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import './Banner.css';

const Banner = () => {
    return (

        <div className='topBanner'>

            {/* navigation  */}
            <div className='BannerNavigation'>
                <Navigation />
            </div>

            <Container>
                {/* title  */}
                <div className='bannerTitle'>
                    <h1 className='fw-bold'>Explore</h1>
                    <h1 className='fw-normal'>Your amazing city</h1>
                    <p className='pt-3'>Find great places to stay, eat, shop, or visit from local experts</p>
                </div>

                {/* search  */}
                <div className='py-4'>
                    <form className='searchPlace' action="">
                        <div className="searchInput">
                            <input type="text" className="w-100" placeholder="Ex: food, service, hotel" />
                        </div>
                        <div className="searchInput where">
                            <select name="" id="" className="w-100" placeholder="Keyword search">
                                <option value="">Where</option>
                                <option value="">San Francisco USA</option>
                                <option value="">Berlin Germany</option>
                                <option value="">Lodon United Kingdom</option>
                                <option value="">Paris Italy</option>
                            </select>
                        </div>
                        <input type="submit" className="searchBtn" value="Search" />
                    </form>
                </div>

                {/* category  */}
                <div className='category'>
                    <p>Or browse the highlights</p>
                    <div>
                        <Button ><i class="fas fa-utensils"></i> Restaurant</Button>
                        <Button ><i class="fas fa-hotel"></i> Hotel</Button>
                        <Button ><i class="fas fa-map-marker-alt"></i> Places</Button>
                        <Button ><i class="fas fa-shopping-bag"></i> Shopping</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;