import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../style/DiscoverMoviePage.scss';
import { Link, useHistory, useParams } from "react-router-dom"; 
      
       
      

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("idle");
  const route_parameters = useParams();
  console.log("rout params", route_parameters)


  const history = useHistory();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  }
  useEffect(() => {
      const search = async () => {
      set_searchState( { status: "searching" });
      const queryParam = encodeURIComponent(route_parameters.searchtext);
      const data = await axios.get(
      `https://omdbapi.com/?apikey=4b29f73c&s=${queryParam}`
          
      );
        
      const dataSearch = data.data.Search;
      set_searchState( { status: "done", results: dataSearch});
      console.log("heee", data)
      
      console.log("I am data search", dataSearch);
      }; 
      search();
    },[route_parameters.searchtext])
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
      <p>
        {searchState.status === "searching"? "SEARCHING...": null };
        {searchState.status === "done" ?  
        
        searchState.results.map((film) => {
            console.log(film)

          return(
          <div className="Movies">
            <Link to={`/movie/${film.imdbID}`}>
            <h2>{film.Title}, {film.Year}</h2>
            </Link>
            <img alt="" src={film.Poster}/>
          </div>
          );
          
        }) : "Wait for the miracle"}
      </p>
    </div>
  );
}