import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, Row, Col } from 'react-bootstrap'

export class MapContainer extends Component {
render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} xs={12}>
            <div className="valueTitle">
              <h2 style={{textAlign: 'center', paddingTop: '35px', paddingBottom: '35px', fontWeight: '300', fontSize: '35px'}}>VISIT US</h2>
            </div>
            <p style={{textAlign: 'center'}}>Address: 3-Shahrah-e-Aiwan-e-Tijarat, China Chowk, Lahore</p>
          </Col>
          <Col lg={12} md={12} xs={12} className="mapContain" style={{height: '400px', padding: '0px', marginBottom: '15px'}}>
            <Map google={this.props.google} style={{width: '100%', height: '400px'}} className="map" initialCenter={{lat: 31.54497, lng: 74.32949}}
            zoom={17}>
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{lat: 31.54497, lng: 74.32949}}
                />
            </Map>
          </Col>
          <Col lg={12} md={12} xs={12}>
            <div className="valueTitle">
              <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', fontWeight: '300', fontSize: '20px'}}>OUR LOCATIONS</h2>
            </div>
            <p style={{textAlign: 'center'}}>Islamabad: Office # 5, Plaza # 13. Jinnah Super Market Islamabad</p>
            <p style={{textAlign: 'center'}}>Multan: House # 2 Muhallah Barsati Adda Band Bosan Road Multan</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBPSio-gwksxK_eyJc9LBtzpjp7MKORuH0"
})(MapContainer)
