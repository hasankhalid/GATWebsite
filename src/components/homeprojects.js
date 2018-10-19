import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import phs from '../resources/PHSII.png'
import fp from '../resources/fingerprint.png'
import girled from '../resources/girleducation.svg'
import Logo from '../resources/LogoAlone2.svg'
import Fade from 'react-reveal/Fade'
import {IndexLinkContainer} from 'react-router-bootstrap'

class HomeProjects extends Component {

  phaInsights = () => {
    window.open("https://gatconsulting.github.io/phainsights", "PHAInsights");
    window.close();
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} xs={12}>
            <Fade>
              <div className="valueTitle">
                <h2 style={{textAlign: 'center', paddingTop: '35px', paddingBottom: '35px',  fontWeight: '300', fontSize: '35px'}}>OUR PROJECTS</h2>
              </div>
            </Fade>
          </Col>
          <Fade left>
          <Col lg={3} md={3} sm={6} xs={12}>
            <div className = "box" style={{backgroundColor: '#EC407A', color: 'white', height: '425px'}}>
              <img alt="PHS icon" style={{height: '63px', alignSelf: 'center'}} src={phs}/>
              <h3 style={{fontSize: '18px'}}>Punjab Health Survey Round II</h3>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p style={{fontSize: '15px'}}>Highlights</p>
                <ul>
                  <li>15570 households reached</li>
                  <li>Results estimated key maternal and early childhood health indicators</li>
                </ul>
                <p style={{fontSize: '18px', textAlign: 'center', marginBottom: '10px', marginTop: '10px', fontWeight: '300'}}>WEBSITE ONLINE SOON</p>
              </div>
            </div>
          </Col>
          </Fade>
          <Fade left>
          <Col lg={3} md={3} sm={6} xs={12}>
            <div className = "box" style={{backgroundColor: '#2196F3', color: 'white', height: '425px'}}>
              <img alt="PHA Icon" style={{height: '63px', alignSelf: 'center'}} src={fp}/>
              <h3 style={{fontSize: '18px'}}>Monitoring and Evaluation for PHA</h3>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p style={{fontSize: '15px'}}>Highlights</p>
                <ul>
                  <li>7200 employees monitored in 24 offices, 1100 parks and greenbelts</li>
                  <li>Monitoring has improved enrollment and increased attendance rates</li>
                </ul>
                <Button className="phabutton" style={{width: '160px', alignSelf: 'center', marginBottom: '10px', marginTop: '10px'}} onClick={() => this.phaInsights()} bsStyle="primary">PHA Insights</Button>
              </div>
            </div>
          </Col>
          </Fade>
          <Fade right>
          <Col lg={3} md={3} sm={6} xs={12} id="girlsti">
            <div className = "box" style={{backgroundColor: '#FF9800', color: 'white', height: '425px'}}>
              <img alt="SSPP Icon" style={{height: '63px', alignSelf: 'center'}} src={girled}/>
              <h3 style={{fontSize: '18px'}}>Supplement Stipend Pilot Program</h3>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p style={{fontSize: '15px'}}>Highlights</p>
                <ul>
                  <li>Conducted both baseline and endline surveys</li>
                  <li>Results evaluated the effect of increasing stipends on female enrollment</li>
                </ul>
                <IndexLinkContainer to="/projects" style={{width: '160px', alignSelf: 'center', marginBottom: '10px', marginTop: '10px'}}>
                  <Button className="phabutton" bsStyle="primary">Learn More</Button>
                </IndexLinkContainer>
              </div>
            </div>
          </Col>
          </Fade>
          <Fade right>
          <Col lg={3} md={3} sm={6} xs={12} id="gat">
            <div className = "box" style={{backgroundColor: '#9C27B0', color: 'white', height: '425px'}}>
            <img alt="GAT Logo" style={{height: '63px', alignSelf: 'center'}} src={Logo}/>
              <h3 style={{fontSize: '18px'}}>Browse other projects of GAT</h3>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p style={{fontSize: '15px'}}>Project areas</p>
                <ul>
                  <li>Health Diagnostic Studies</li>
                  <li>Education Surveys</li>
                  <li>Human Resource Management</li>
                  <li>Third Party Validations</li>
                </ul>
                <IndexLinkContainer to="/projects" style={{width: '160px', alignSelf: 'center', marginBottom: '10px', marginTop: '10px'}}>
                  <Button className="phabutton" bsStyle="primary">Learn More</Button>
                </IndexLinkContainer>
              </div>
            </div>
          </Col>
          </Fade>
        </Row>
      </Grid>
    )
  }
}

export default HomeProjects;
