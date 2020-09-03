import React from 'react';
import {
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
                    exact={true}
                    activeStyle={{fontWeight: 'bold'}}
                    to="/" >Home</NavLink>
            </li>

            <li>
                <NavLink 
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ fontWeight: 'bold' }}
                to="/about">
                About</NavLink>
                </li>

            <li>
                <NavLink 
                className="Nav_link"
                activeClassName="activeRoute"
                activeStyle={{ fontWeight: 'bold' }}
                to="/discover">
                    Discover Movies Page</NavLink>
            </li>

        </ul>
        </nav>
        <h1>Heeeeey</h1>
     
    </div>;
  };
  
  export default NavBar;