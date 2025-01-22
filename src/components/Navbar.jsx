// src/components/Header.jsx
import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">
          <span role="img" aria-label="logo">🧑‍💻</span>
        </div>
        <ul>
          <li>Projects</li>
          <li>About</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        <div className="contact-btn">
          <button>Let's work</button>
        </div>
      </nav>
    );
  }

  handleClick() {
    alert("Let’s Work button clicked!");
  }
}

export default Navbar;
