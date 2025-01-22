// src/components/Footer.jsx
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>© {this.getCurrentYear()} Xola Bangaza</p>
      </footer>
    );
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }
}

export default Footer;
