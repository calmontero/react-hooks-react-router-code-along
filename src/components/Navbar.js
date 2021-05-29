import React from "react";
import { NavLink } from "react-router-dom";

// Add basic styling for NavLinks
const linkStyles = {
    with: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

//add the navbar component
function Navbar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/signup"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Signup
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
  
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }

export default Navbar;