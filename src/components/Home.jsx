import React, {useEffect, useState} from 'react';

import { useParams } from "react-router";

import axios from 'axios';

import Stars from './Stars';

import StarShips from './StarShips';

import Vehicles from './Vehicles';

import Films from './Films';

import Species from './Species';


const Home = () => {


    const { category, id } = useParams();


    const [info, setInfo] = useState({})



    useEffect ( () => {

        axios.get(`https://swapi.dev/api/${category}/${id}/`)

            .then ( response => {

                setInfo (response.data)

            })

            .catch( error => console.log (error) )

    }, [category,id] )



    return (

        <div>

            {

                category === "people"?

                <>

                    <h1 className="my-5"> <u> {info.name} </u> </h1>

                    <p> Height: {info.height} </p>

                    <p> Mass: {info.mass} </p>

                    <p>Hair Color: {info.hair_color}</p>

                    <p>Skin Color: {info.skin_color}</p>

                </>:

                category === "planets"?

                <Stars 
                
                name = {info.name} 

                climate = {info.climate} 

                terrain = {info.terrain}

                surfaceWater = {info.surface_water}

                population = {info.population}

                >
                
                </Stars>:


                category === "starships"?

                <StarShips 

                name = {info.name} 

                model = {info.model} 

                manufacturer = {info.manufacturer}

                costInCredits = {info.cost_in_credits}

                cargoCapacity = {info.cargo_capacity}

                >

                </StarShips>:


                category === "vehicles"?

                <Vehicles 

                name = {info.name} 

                model = {info.model} 

                manufacturer = {info.manufacturer}

                costInCredits = {info.cost_in_credits}

                cargoCapacity = {info.cargo_capacity}

                >

                </Vehicles>:


                category === "films"?

                <Films 

                title = {info.title} 

                episodeId = {info.episode_id} 

                director = {info.director}

                producer = {info.producer}

                releaseDate = {info.release_date}

                >

                </Films>:

                category === "species"?

                <Species 

                name = {info.name} 

                classification = {info.classification} 

                averageHeight = {info.average_height}

                averageLifespan = {info.average_lifespan}

                language = {info.language}

                >

                </Species>:

                <>
                </>
            }

        </div>
    );
};

export default Home;