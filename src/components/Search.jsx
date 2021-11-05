import React, {useEffect, useState} from 'react';

import axios from 'axios';

import { useHistory } from "react-router";

const Search = () => {



    const [categories, setCategories]= useState([])



    const [formInfo, setFormInfo] = useState({

        category:"people",

        id: ""

    })



    const history = useHistory();



    useEffect ( () => {

        
        axios.get ("https://swapi.dev/api/")

            .then ( response => {

                setCategories( Object.keys(response.data) )

            } )

            .catch( error => console.log (error) )

    } , [] )



    const changeHandler = (event) => {

        setFormInfo ( {

            ...formInfo,

            [event.target.name]: event.target.value

        } )

    }



    const submitHandler = (event) => {

        event.preventDefault();

        history.push(`/${formInfo.category}/${formInfo.id}`)

    }



    // const [errorMessage, setErrorMessage] = React.useState("");

    // const handleClick = () => {

    // setErrorMessage("These aren't the droids you're looking for!")

    

    // }


    return (

        <div className = "d-flex justify-content-center">

            <form onSubmit = {submitHandler} className = "row" action = "">

            <div className = "col-auto">

                    <select onChange = { (event) => changeHandler (event) } name = "category" id = "" className = "form-select">

                        {

                            categories.map ( (categories,x) => {

                                return <option key = {x} value = {categories}> {categories} </option>

                            } )

                        }

                    </select>

            </div>

            <div className="col-auto">

                    <input onChange = { (event) => changeHandler (event) } type="number" name="id" id="" className="form-control" />
            

            </div>

            <div className = "col-auto">

                    <input className = "btn btn-success" type = "submit" value = "Search" />

                    

            </div>
            
            {/* {errorMessage && <div className="error"> {errorMessage}  <img src="	https://cdn.vox-cdn.com/thumbor/RrRiR78fhaENuTwBwV…19609150/starwars3_movie_screencaps.com_14193.jpg" alt="Ben_Kenobi" /> </div>} */}

            
            </form>


        </div>

    );
};


export default Search;