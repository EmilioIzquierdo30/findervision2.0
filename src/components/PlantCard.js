import React from 'react';

const PlantCard = ({ name, scientificName, description, image }) => {
    return (
        <div className="plant-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p><i>{scientificName}</i></p>
            <p>{description}</p>
        </div>
    );
};

export default PlantCard;
