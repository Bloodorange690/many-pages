import React from 'react';
import NavBar from '../compoents/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


const HomePage = () => {
  return <div>This is home page
      <NavBar/>
  </div>;
};

export default HomePage;