import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';


class InNumbers extends Component {
  render () {
    return (
      <Grid>
      <Row className="show-grid" style={{marginBottom: '15px'}}>
      <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
        <h2 style={{textAlign: 'center', fontWeight: '300', fontSize: '35px'}}>IN NUMBERS</h2>
      </Col>
      {this.props.data.length > 0 && this.props.data.map((numberItem, index) => (
        <Zoom key={index}>
        <Col lg={3} md={3} sm={3} xs={6}>
          <p style={{textAlign: 'center', fontSize: '30px', color: numberItem.color}}>{numberItem.number}</p>
          <p style={{textAlign: 'center', fontSize: '16px'}}>{numberItem.subheading}</p>
        </Col>
        </Zoom>
      ))}
      </Row>
      </Grid>
    )
  }
}

export default InNumbers;
