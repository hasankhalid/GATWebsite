import React, { Component } from "react";
import Values from "../components/values";
import TextContain from "../components/titletextbox.js";
import { Grid, Row } from "react-bootstrap";
import MapContainer from "../components/map";
import TimeLine from "../components/timeline";
import NavBar from "../components/navbar";
import team from "../resources/icons/team.png";
import innovate from "../resources/innovate.png";
import respect from "../resources/icons/respect.jpg";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  data = {
    title: "OUR VALUES",
    data: [
      {
        imgsrc: team,
        title: "Team Work",
        desc:
          "At GAT, we value and recognize the potential of each and every member of our team. We espouse a culture where every staff member strives to learn from fellow members and is eager to make his/ her utmost contributions for the team’s enrichment.",
      },
      {
        imgsrc: respect,
        title: "Respect",
        desc:
          "GAT works extensively on a diverse nature of surveys with respondents from different walks of life. While focusing on creating value for our clients, GAT also values the dignity of all the respondents that we work with and under no circumstances compromises it.",
      },
      {
        imgsrc: innovate,
        title: "Innovation",
        desc:
          "We value and encourage problem solving and passionate search for unique and out of the box solutions to pressing challenges. Our team is encouraged to use and develop new technologies and methods to provide efficient and quality output to our clients.",
      },
    ],
  };

  mission = {
    title: "OUR MISSION",
    body:
      "GAT Consulting’s mission is to make quality survey management and monitoring and evaluation easy and accessible for our clients in the public and private sector. We achieve this by marrying sector level expertise with cutting edge technologies that make our data collection, data analysis and reporting processes simple, efficient and tailored to our client’s needs.",
    color: "2196F3",
  };

  gat = {
    title: "COMPANY PROFILE",
    body:
      "GAT specializes in managing large scale surveys for our clients including international donors, public sector agencies and non profit organizations. GAT also provides monitoring and evaluation services, particularly of Human resources. Our network of consultants also provide third party evaluation services in the fields of public policy and engineering.",
    color: "8BC34A",
  };

  timelineData = [
    {
      classN: "",
      bgcolor: "#9C27B0",
      title: "1989",
      body:
        "Founded in 1989, Ghous-ul-Azam Trust was engaged in increasing accessibility to education throughout Pakistan. The trust promoted education on a no profit no loss basis.",
    },
    {
      classN: "timeline-inverted",
      bgcolor: "#CDDC39",
      title: "2014",
      body:
        "In 2014, the organization expanded its services to other sectors and GAT Consulting was born. GAT provided services in surveys, third party validations and monitoring services to our clients which include international donor agencies, public sector agencies and nonprofits in the sector of Health and Education.",
    },
    {
      classN: "",
      bgcolor: "#03A9F4",
      title: "2018",
      body:
        "With major milestones achieved, GAT Consulting is undergoing a positive transformation to reinforce company values and ideals. With the rebranded logo, GAT Consulting has now extended its current services to incorporate interactive data visualizations and cutting edge IT solutions for survey management.",
    },
  ];

  render() {
    return (
      <div className="App">
        <NavBar
          color="#303F9F"
          textcolor="white"
          navitems={["ABOUT US", "SERVICES", "PROJECTS", "OUR TEAM", "CAREERS"]}
        />{" "}
        <div
          className="titleContain"
          style={{ backgroundColor: "#303F9F", marginBottom: "50px" }}
        >
          <h2 style={{ fontWeight: "300", fontSize: "40px" }}>About Us</h2>
        </div>
        <Grid>
          <Row className="show-grid">
            <TextContain data={this.mission} />
            <TextContain data={this.gat} />
          </Row>
        </Grid>
        <Values data={this.data} />
        <TimeLine data={this.timelineData} />
        <MapContainer />
      </div>
    );
  }
}

export default About;
