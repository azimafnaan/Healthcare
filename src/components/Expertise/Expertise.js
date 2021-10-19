import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Expertise.css';

const Expertise = () => {
    const [expertise, setExpertise] = useState([]);
    useEffect(() => {
        fetch('expertise.JSON')
            .then(res => res.json())
            .then(data => setExpertise(data))
    }, [])
    return (
        <div id="expertise">
            <h2 className="mt-5">Our Expertise</h2>
            <div className="expertise-container">
                {
                    expertise.map(expert => <Expert
                        key={expert.key}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Expertise;