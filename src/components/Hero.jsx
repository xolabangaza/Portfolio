// src/components/Hero.jsx
import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section>
        <span>Available for new projects</span>
        <h1>{this.getName()}</h1>
        <p>
          I'm a <strong>Full-Stack Developer</strong> based in
          <span>Cape Town</span>, specializing in designing
          <em>aesthetically pleasing</em> UIs and building
          <strong> scalable applications</strong> that perform efficiently.
        </p>
        <div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </section>
    );
  }

  getName() {
    return "Xola Bangaza";
  }
}

export default Hero;
