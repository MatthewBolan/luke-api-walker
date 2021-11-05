import React from 'react';

const Species = (props) => {
    
    return (

        <div>
            <h3>{props.name}</h3>

            <h3>Classification: {props.classification}</h3>

            <h3>Average Height: {props.averageHeight}</h3>

            <h3>Average Lifespan: {props.averageLifespan}</h3>

            <h3>Language: {props.language}</h3>


        </div>
    );
};


export default Species;