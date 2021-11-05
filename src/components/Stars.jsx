import React from 'react';

const Stars = (props) => {
    
    return (

        <div>
            <h1 className="my-5"> <u> {props.name} </u> </h1>

            <p> Climate: {props.climate} </p>

            <p> Terrain: {props.terrain} </p>

            <p> Surface Water: {props.surfaceWater} </p>

            <p> Population: {props.population} </p>


        </div>
    );
};


export default Stars;