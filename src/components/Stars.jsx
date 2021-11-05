import React from 'react';

const Stars = (props) => {
    
    return (

        <div>
            <h3>{props.name}</h3>

            <h3>Climate: {props.climate}</h3>

            <h3>Terrain: {props.terrain}</h3>

            <h3>Surface Water: {props.surfaceWater}</h3>

            <h3>Population: {props.population}</h3>


        </div>
    );
};


export default Stars;