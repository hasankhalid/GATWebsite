import React, { Component } from "react";
import NavBar from "../components/navbar";
import Insights from "../components/insights";
import Portfolio from "../components/portfolio";
import Fade from "react-reveal/Fade";

class Projects extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          color="#1976D2"
          textcolor="white"
          navitems={["ABOUT US", "SERVICES", "PROJECTS", "OUR TEAM", "CAREERS"]}
        />
        <div
          className="titleContain"
          style={{ backgroundColor: "#1976D2", marginBottom: "50px" }}
        >
          <h2 style={{ fontWeight: "300", fontSize: "40px" }}>Our Projects</h2>
        </div>
        <Fade big>
          <Insights />
        </Fade>
        <Portfolio />
      </div>
    );
  }
}

export default Projects;
