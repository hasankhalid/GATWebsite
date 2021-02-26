import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import NavBar from "../components/navbar";
import Iframe from "react-iframe";

class Careers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <NavBar
          color="#303F9F"
          textcolor="white"
          navitems={["ABOUT US", "SERVICES", "PROJECTS", "OUR TEAM", "CAREERS"]}
        />
        <div
          className="titleContain"
          style={{ backgroundColor: "#303F9F", marginBottom: "50px" }}
        >
          <h2 style={{ fontWeight: "300", fontSize: "40px" }}>Careers</h2>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "30px" }}
            >
              <p className="standard-text">
                GAT Consulting Pvt. Ltd is seeking applications for different
                upcoming surveys having the following experience and
                qualifications
              </p>
              <p className="standard-text">
                <b>Qualification:</b> Minimum Bachelor's degree from any
                recognized institution{" "}
              </p>
              <p className="standard-text">
                <b>Experience:</b> Minimum 2 years' experience in social sector
                projects related to conducting field data collection including
                household interviews, institutional interviews, document review,
                organization of data for reporting, transcribing focus group
                discussions etc.
              </p>
              <p className="standard-text">
                <b>
                  (Females are strongly encouraged to apply)
                  <p>CV upload in Word or Pdf format.</p>
                </b>
              </p>
              <p className="standard-text">
                <b>Only shortlisted candidates will be called for the test.</b>
              </p>
            </Col>

            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "30px" }}
            ></Col>

            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "30px" }}
            >
              <p className="azam">
                <b>
                  APPLY FOR JOB
                  <a
                    style={{ marginLeft: "10px" }}
                    href="https://ee.humanitarianresponse.info/w4sVgevU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b className="azam">CLICK ON THIS LINK.</b>
                  </a>
                </b>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Careers;
