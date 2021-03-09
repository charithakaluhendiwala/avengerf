import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Avengers" className="nav-link">Avengers</Link>
      </nav>
    );
  }
}

export default NavBar;
