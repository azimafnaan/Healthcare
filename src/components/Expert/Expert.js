import React from 'react';
import './Expert.css';
const Expert = ({ expert }) => {
    const { img, name, skill } = expert;
    return (
        <div className="expert-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{skill}</p>
        </div>
    );
};

export default Expert;