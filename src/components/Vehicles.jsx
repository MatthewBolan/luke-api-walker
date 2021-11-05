import React from 'react';

const Vehicles = (props) => {
    
    return (

        <div>
            <h3>{props.name}</h3>

            <h3>Model: {props.model}</h3>

            <h3>Manufacturer: {props.manufacturer}</h3>

            <h3>Cost In Credits: {props.costInCredits}</h3>

            <h3>Cargo Capacity: {props.cargoCapacity}</h3>


        </div>
    );
};


export default Vehicles;