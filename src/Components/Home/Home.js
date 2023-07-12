import React from 'react';
import Banner from '../Banner/Banner';
import Publications from '../Publications/Publications';
import FeaturedWorks from '../FeaturedWorks/FeaturedWorks';
import Footer from '../Footer/Footer';
import Researches from '../Research_experience/Researches';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Publications></Publications>
            <FeaturedWorks></FeaturedWorks>
            <Researches></Researches>
            <Footer></Footer>
        </div>
    );
};

export default Home;