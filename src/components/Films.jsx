import React from 'react';

const Films = (props) => {
    
    return (

        <div>
            <h3>{props.title}</h3>

            <h3>Episode: {props.episodeId}</h3>

            <h3>Director: {props.director}</h3>

            <h3>Producer: {props.producer}</h3>

            <h3>release_date: {props.releaseDate}</h3>


        </div>
    );
};


export default Films;