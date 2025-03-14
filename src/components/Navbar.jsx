import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="resume">Resume</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
