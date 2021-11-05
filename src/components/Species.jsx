
import React from 'react';

const Species = (props) => {

    return (

        <div>

            <h1 className="my-5"> <u> {props.name} </u> </h1>

            <p> Classification: {props.classification} </p>

            <p> Average Height: {props.averageHeight} </p>

            <p> Average Lifespan: {props.averageLifespan} </p>

            <p> Language: {props.language} </p>

        </div>

    );

};


export default Species;