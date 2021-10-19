import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Expertise from '../Expertise/Expertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Expertise></Expertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;