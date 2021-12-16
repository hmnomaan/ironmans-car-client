import React from 'react';
import Banner from '../Banner/Banner.js';
import Contact from '../Contact/Contact.js';
import DisplayCars from '../DisplayCars/DisplayCars.js';
import Offers from '../Offers/Offers.js';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            {/* <DisplayCars></DisplayCars> */}
            <Offers></Offers>
            <Contact></Contact>
        </>
    );
};

export default Home;