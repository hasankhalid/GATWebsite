import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import WASA from '../resources/slides/wasa.jpg'
import PHS from '../resources/slides/chord.svg'

class Insights extends Component {
  state = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  }

  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid" style={{marginBottom: '15px'}}>
            <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
              <h2 style={{textAlign: 'center', marginBottom: '20px', fontWeight: '300', fontSize: '35px'}}>PROJECT INSIGHTS</h2>
            </Col>
          </Row>
        </Grid>
        <div style={{width: '100%', backgroundColor: '#ECEFF1', paddingTop: '40px', paddingBottom: '40px', marginBottom: '15px'}}>
          <Grid>
            <Row className="show-grid" style={{marginBottom: '15px'}}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Slider className="slider" {...this.state}>
                  <div className="insight" style={{width: '100%', display: 'flex'}}>
                    <img alt="PHS Visualization" className="insightImage" style={{borderRadius: '7px', marginRight: '30px', height: '320px'}} src={PHS}/>
                    <div>
                      <h2 style={{textAlign: 'left', marginBottom: '20px', paddingTop: '35px', fontWeight: '300', fontSize: '35px'}}>INTERACT WITH HEALTH PATTERNS ACROSS PUNJAB</h2>
                      <p style={{fontSize: '22px'}}>ONLINE SOON</p>
                    </div>
                  </div>
                  <div className="insight" style={{display: 'flex', width: '100%'}}>
                    <img alt="WASA Visualization" className="insightImage" style={{borderRadius: '7px', marginRight: '30px', onjectFit: 'cover', height: '320px'}} src={WASA}/>
                    <div>
                      <h2 style={{textAlign: 'left', marginBottom: '20px', paddingTop: '35px', fontWeight: '300', fontSize: '35px'}}>EXPLORING PENETRATION OF WASA SERVICES ACROSS COLONIES IN FAISALABAD</h2>
                      <p style={{fontSize: '22px'}}>ONLINE SOON</p>
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Insights;
