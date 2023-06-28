import React from 'react';
import Banner from '../Banner/Banner';
import Publications from '../Publications/Publications';
import FeaturedWorks from '../FeaturedWorks/FeaturedWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Publications></Publications>
            <FeaturedWorks></FeaturedWorks>
        </div>
    );
};

export default Home;