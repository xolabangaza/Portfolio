// src/App.jsx
import React, { Component } from "react";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
