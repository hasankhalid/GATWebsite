import React, { Component } from "react";
import Slide from "../components/slide";
import Clients from "../components/clients";
import Values from "../components/values";
import HomeProjects from "../components/homeprojects";
import NavBar from "../components/navbar";
import survey from "../resources/icons/survey.png";
import viz from "../resources/icons/dataviz.png";
import loc from "../resources/icons/loccircle.png";

class Home extends Component {
  data = {
    title: "WHY CHOOSE US?",
    class: "fadeIn",
    data: [
      {
        imgsrc: survey,
        title: "Survey Design & Management",
        class: "animate1",
        desc:
          "Our survey design methodology uses best practices to increase survey response rates and utilises quality assurance mechanisms to ensure data quality and integrity.",
      },
      {
        imgsrc: viz,
        title: "Data Analysis & Visualization",
        class: "animate2",
        desc:
          "Our interactive visualizations and dashboards allow our clients to identify data trends and patterns which assist them in effective decision making.",
      },
      {
        imgsrc: loc,
        title: "Monitoring & Evaluation",
        class: "animate3",
        desc:
          "Our M&E dashboards are developed using the latest technologies and are tailor-made according to our clients requirements and organizational procedures. ",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <NavBar
          color="#FFFFFF"
          textcolor="#777777"
          navitems={["ABOUT US", "SERVICES", "PROJECTS", "OUR TEAM", "CAREERS"]}
        />{" "}
        <Slide />
        <Clients />
        <Values data={this.data} />
        <HomeProjects />
      </div>
    );
  }
}

export default Home;
