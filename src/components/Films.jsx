import React from 'react';

const Films = (props) => {
    
    return (

        <div>

            <h1 className="my-5"> <u> {props.title} </u> </h1>

            <p> Episode: {props.episodeId} </p>

            <p >Director: {props.director} </p>

            <p> Producer: {props.producer} </p>

            <p> release_date: {props.releaseDate} </p>


        </div>
    );
};


export default Films;