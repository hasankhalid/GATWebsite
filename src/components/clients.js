import React, {Component} from 'react'
import Slider from 'react-slick'
import { Col, Grid, Row} from 'react-bootstrap'
import wb from '../resources/clientlogos/worldbank.png'
import ce from '../resources/clientlogos/cambridgeed.svg'
import pg from '../resources/clientlogos/punjabgov.png'
import sg from '../resources/clientlogos/sindhgovt.png'
import pha from '../resources/clientlogos/pha.svg'
import dfid from '../resources/clientlogos/dfid.png'
import who from '../resources/clientlogos/who.png'
import us from '../resources/clientlogos/USAID.png'
import acted from '../resources/clientlogos/acted.png'
import uk from '../resources/clientlogos/UKaid.png'
import pp from '../resources/clientlogos/pp.png'

class Clients extends Component {
  render () {
    var settings = {
      autoplay: true,
      autoplayspeed: 500,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,

          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    }
    return (
      <div className="clients">
        <Grid className="clientElement">
          <Row className="show-grid">
            <Col lg={3} md={3} xs={12} className="response">
              <span className="clientBanner">Trusted by over 25 organizations and businesses in 4 sectors</span>
            </Col>
            <Col xs={1}></Col>
            <Col lg={9} md={9} xs={10}>
              <Slider className="slider" {...settings}>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={wb} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={ce} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={pg} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={pha} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={pp} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={us} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={acted} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={who} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={dfid} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={uk} alt="1"/></div>
                <div style={{display: 'flex'}} className="logoContain"><img className="logo" src={sg} alt="1"/></div>

              </Slider>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Clients
