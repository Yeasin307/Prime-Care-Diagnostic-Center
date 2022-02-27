import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;