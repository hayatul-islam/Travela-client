import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import OurTour from '../OurTour/OurTour';
import PopularHotelAndRoom from '../PopularHotelAndRoom/PopularHotelAndRoom';
import PopularRestaurant from '../PopularRestaurant/PopularRestaurant';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Destination />
            <OurTour />
            <PopularHotelAndRoom />
            <PopularRestaurant />
            <Articles />
        </div>
    );
};

export default Home;