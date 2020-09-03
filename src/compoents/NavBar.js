import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


const NavBar = () => {
    return <div>
        <nav>
         <ul>

            <li>
                <NavLink 
                    className="Nav_link"
                    activeClassName="activeRoute"
                    activeStyle={{fontWeight: 'bold'}}
                    to="/Homepage" >Home</NavLink>
            </li>

            <li>
                <NavLink 
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ fontWeight: 'bold' }}
                to="/AboutPage">
                About</NavLink>
                </li>

            <li>
                <NavLink 
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ fontWeight: 'bold' }}
                to="/DiscoverMoviesPage">
                    Discover Movies Page</NavLink>
            </li>

        </ul>
        </nav>
        <h1>Heeeeey</h1>
     
    </div>;
  };
  
  export default NavBar;