import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../image/1.jpg';
import slide2 from '../../image/2.jpg';
import slide3 from '../../image/3.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Thoracic surgery refers on organs in the chest</h3>
                        <p>Surgery is a medical or dental specialty that uses operative manual and instrumental techniques on a person.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;