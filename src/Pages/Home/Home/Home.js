import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import OurTour from '../OurTour/OurTour';
import PopularHotelAndRoom from '../PopularHotelAndRoom/PopularHotelAndRoom';
import PopularRestaurant from '../PopularRestaurant/PopularRestaurant';
import Service from '../Service/Service';
import SomeFun from '../SomeFun/SomeFun';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Subcribe from './Subcribe/Subcribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Destination />
            <OurTour />
            <SomeFun />
            <PopularHotelAndRoom />
            <WhyChooseUs />
            <PopularRestaurant />
            <Articles />
            <Subcribe />
            <Footer />
        </div>
    );
};

export default Home;