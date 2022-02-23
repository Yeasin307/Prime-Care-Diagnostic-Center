import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import TopServices from '../TopServices/TopServices';

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div id="home">
            <Banner></Banner>
            <TopServices></TopServices>
        </div>
    );
};

export default Home;