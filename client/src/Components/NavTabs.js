import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Components/NavTabs.css";


function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();
  
    return (
      <nav className="navbar navbar-fixed-lg">
        <a className="navbar-brand">Music Collection</a>
        {/* <a className="navbar-brand parker"><Link to="/Home" className={location.pathname === "/Home"}>Parker Martin</Link></a> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link 
            to="/Home" 
            className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Music"
            className={location.pathname === "/Music" ? "nav-link active" : "nav-link"}>
            Music
          </Link>
          </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Login"
            className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>
            Login
          </Link>
        </li>
        
        
      </ul>
      </nav>
    );
  }
  
  export default NavTabs;