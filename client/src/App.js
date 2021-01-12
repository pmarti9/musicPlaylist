import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import NavTabs from "./Components/NavTabs"
import Music from "./Components/Music/Music"
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Login from "./Components/Login/Login"

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
     <div>
     <NavTabs />
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Music" component={Music} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
     </div>
    </div>
    </Router>
  );
}

export default App;
