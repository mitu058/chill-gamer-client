import React from 'react';
import Banner from '../Components/Banner';
import TopReview from '../Components/TopReview';
import Trending from '../Components/Trending';
import Upcomeing from '../Components/Upcomeing';
import Review from '../Components/Review';

const Home = () => {
    
    
    return (
        <div>
    <Banner></Banner>
    <TopReview></TopReview>
    <Trending></Trending>
    <Upcomeing></Upcomeing>
    <Review></Review>
        </div>
    );
};

export default Home;