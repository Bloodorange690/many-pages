import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function MoviePage() {
    const route_parameters = useParams();

    const [movie, set_Movie] = useState([]);
    console.log("You look good todya",route_parameters);

    useEffect(() => {
        const getMovieById = async () => {
            console.log("TADADAD");

            const response = await axios.get(
                `http://www.omdbapi.com/?i=${route_parameters.imdb_id}&apikey=4b29f73c`
            );
            console.log("I am response", response)
            set_Movie(response.data);
        };
        getMovieById();
    }, [route_parameters.imdb_id])
    

    return(
            <div>
                <img alt="poster" src={movie.Poster}/>
                <h3>{movie.Title}</h3>
                <h3>{movie.Actors}</h3>
                <h3>{movie.Year}</h3>
                <h3>{movie.Director}</h3>
                <h3>{movie.Genre}</h3>
                <h3>{movie.Language}</h3>
            </div>
    )
    
  }
