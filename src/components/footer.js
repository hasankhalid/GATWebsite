import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Logo from '../resources/Logoinvert.svg'
import IoSocialLinkedinOutline from 'react-icons/lib/io/social-linkedin-outline'
import IoSocialTwitterOutline from 'react-icons/lib/io/social-twitter-outline'
import {IndexLinkContainer} from 'react-router-bootstrap'


class Footer extends Component {

  linkedIn = () => {
    window.open("https://www.linkedin.com/company/18442185/", "TwitterProfile");
    window.close();
  }

  render () {
    return (
      <footer>
        <div style={{width: '100%', marginTop: '30px', backgroundColor: '#264348', color: '#9E9E9E', overflow: 'hidden'}}>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12} style={{marginTop: '40px', marginBottom: '10px'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img alt="GAT Logo" style={{height: '55px', marginBottom: '10px', alignSelf: 'center'}} src={Logo}/>
              </div>
            </Col>
            <Col lg={2} md={2} sm={2} xs={0}>
            </Col>
            <Col lg={2} md={2} sm={2} xs={6}>
              <IndexLinkContainer className="foothover" style={{ fontSize: '18px', fontWeight: '300',marginTop: '15px', textAlign: 'center'}} to={'/aboutus'}>
                <p className="footlink">ABOUT US</p>
              </IndexLinkContainer>
            </Col>
            <Col lg={2} md={2} sm={2} xs={6}>
              <IndexLinkContainer className="foothover" style={{ fontSize: '18px', fontWeight: '300',marginTop: '15px', textAlign: 'center'}} to={'/services'}>
                <p className="footlink" style={{marginTop: '15px', textAlign: 'center', color: 'white'}}>SERVICES</p>
              </IndexLinkContainer>
            </Col>
            <Col lg={2} md={2} sm={2} xs={6}>
              <IndexLinkContainer className="foothover" style={{ fontSize: '18px', fontWeight: '300',marginTop: '15px', textAlign: 'center'}} to={'/projects'}>
                <p className="footlink" style={{marginTop: '15px', textAlign: 'center', color: 'white'}}>PROJECTS</p>
              </IndexLinkContainer>
            </Col>
            <Col lg={2} md={2} sm={2} xs={6}>
              <IndexLinkContainer className="foothover" style={{ fontSize: '18px', fontWeight: '300',marginTop: '15px', textAlign: 'center'}} to={'/ourteam'}>
                <p className="footlink" style={{marginTop: '15px', textAlign: 'center', color: 'white'}}>OUR TEAM</p>
              </IndexLinkContainer>
            </Col>
            <Col lg={2} md={2} sm={2} xs={0}>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
              <IoSocialLinkedinOutline className="social" onClick={() => this.linkedIn()} size={40} style={{margin: '15px',cursor: 'pointer'}}/>
              <IoSocialTwitterOutline className="social" size={40} style={{margin: '15px',cursor: 'pointer'}}/>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', marginBottom: '20px'}}>
              <p>3-Shahrah-e-Aiwan-e-Tijarat, China Chowk, Lahore</p>
              <p>Phone: 92-42-37500724</p>
              <p>Email: contact@gatconsultancy.com</p>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <div style={{width: '100%', height: '1px', backgroundColor: '#9E9E9E'}}></div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} style={{marginTop: '20px', marginBottom: '40px'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', borderWidth: '5px', borderColor: 'white'}}>
                <p>Copyright 2018, GAT Consulting Pvt. Ltd.</p>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
      </footer>
    )
  }
}

export default Footer;
