import React from 'react';
import image from '../../image/about.jpg'
import './About.css';
const About = () => {
    return (
        <div>
            <h1>About Surgeon Heath Care</h1>
            <div className="about-section">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="about-right">
                    <h2>Why would you accept our Service</h2>
                    <p>Surgery is a medical or dental specialty that uses operative manual and instrumental techniques on a person to investigate or treat a pathological condition such as a disease or injury, to help improve bodily function, appearance, or to repair unwanted ruptured areas.</p>
                    <p>he act of performing surgery may be called a surgical procedure, operation, or simply "surgery". In this context, the verb "operate" means to perform surgery. The adjective surgical means pertaining to surgery; e.g. surgical instruments or surgical nurse.</p>
                </div>
            </div>
        </div>
    );
};

export default About;