import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

class ServiceComponent extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
              <h2 style={{textAlign: 'center', marginBottom: '20px', paddingTop: '35px', fontWeight: '300', fontSize: '35px'}}>SERVICES THAT FLEX TO FIT YOUR NEEDS</h2>
              <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '16px'}}>GAT Consulting offers a variety of services which can tailored according to your specific requirements</p>
            </Col>
          </Row>
        </Grid>
        <div style={{width: '100%', backgroundColor: '#E57373', color: 'white', paddingTop: '60px', paddingBottom: '60px', marginBottom: '-30px'}}>
          <Grid>
            {this.props.data.length > 0 && this.props.data.map((serviceItem, index) => (
              <Row className="show-grid serviceRow" key={index}>
                <Fade left>
                <Col lg={6} md={6} sm={6} xs={12} style={{marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div className="box shadow" style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '0px', overflow: 'hidden', color: 'black', borderRadius: '7px'}}>
                    <img alt="Service Card Poster" src={serviceItem.imglink} style={{width: '100%'}}/>
                    <p style={{paddingLeft: '15px', paddingTop: '20px', paddingBottom: '20px', fontSize: '16px'}}>{serviceItem.title}</p>
                  </div>
                </Col>
                </Fade>
                <Fade right>
                <Col lg={6} md={6} sm={6} xs={12} style={{marginBottom: '15px', alignSelf: 'center'}}>
                  <h2 className="serviceHead" style={{fontWeight: '300', fontSize: '37.5px'}}>{serviceItem.title}</h2>
                  <p style={{marginTop: '15px', fontSize: '16px', fontWeight: '300', textAlign: 'justify'}}>{serviceItem.desc}</p>
                </Col>
                </Fade>
              </Row>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}

export default ServiceComponent;
