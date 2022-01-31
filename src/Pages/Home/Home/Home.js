import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import OurTour from '../OurTour/OurTour';
import PopularHotelAndRoom from '../PopularHotelAndRoom/PopularHotelAndRoom';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Destination />
            <OurTour />
            <PopularHotelAndRoom />
        </div>
    );
};

export default Home;