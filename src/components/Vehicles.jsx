import React from 'react';

const Vehicles = (props) => {
    
    return (

        <div>
            <h1 className="my-5"> <u>{props.name} </u> </h1>

            <p>Model: {props.model}</p>

            <p>Manufacturer: {props.manufacturer}</p>

            <p>Cost In Credits: {props.costInCredits}</p>

            <p>Cargo Capacity: {props.cargoCapacity}</p>


        </div>
    );
};


export default Vehicles;