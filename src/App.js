import React from 'react';
import './App.css';
//import { Switch, Route, } from "react-router-dom";
import DiscoverMoviesPage from './pages/AboutPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import NavBar from './compoents/NavBar';

export default function App() {
  return (
      <div>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <NavBar>
        <Switch>

        <Route path="/DiscoverMoviesPage" component={DiscoverMoviesPage} />
          
          <Route path="/AboutPage" component={AboutPage} />

          <Route path="/HomePage" component={HomePage} /> 
        </Switch>
        /</NavBar>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

