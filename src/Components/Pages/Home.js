import React from 'react';
import Banner from '../Header/Banner';
import Products from '../Products/Products';
import BusinessSummary from './BusinessSummary';
import Feedback from './Feedback';
import ManufacturingVideos from './ManufacturingVideos';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ManufacturingVideos></ManufacturingVideos>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;