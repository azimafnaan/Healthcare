import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, title, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/service/${ id }`}>
                <button className="btn btn-primary">View Details</button>
            </Link>
        </div>
    );
};

export default Service;