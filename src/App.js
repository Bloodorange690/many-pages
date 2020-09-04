import React from 'react';
import './App.css';
//import { Switch, Route, } from "react-router-dom";
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage'
import {
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './compoents/NavBar';
import MoviePage from './pages/oneMoviePage';

 function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
          <Switch>
          <Route path="/movie/:imdb_id" component={MoviePage} />;
            <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} exact/> 
          </Switch>
      </header>
    </div>
  )
};
export default App;
