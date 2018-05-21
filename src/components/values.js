import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

class Values extends Component {

  fadeclass = ['left','','right']

  render (){
    return (
      <div className="values">
        <Grid>
          <Row className="show-grid">
            <Fade>
              <div className="valueTitle">
                <h2 className={this.props.data.class}  style={{textAlign: 'center', paddingTop: '35px', paddingBottom: '35px',  fontWeight: '300', fontSize: '35px'}}>{this.props.data.title}</h2>
              </div>
            </Fade>
            {this.props.data.data.length > 0 && this.props.data.data.map((valueItem, index) => (
              <Col key={valueItem.title} className={valueItem.class} lg={4} md={4} xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Fade top>
                  <img alt="Value Icon" style={{height: '100px', width: '85px', paddingBottom: '15px'}} src={valueItem.imgsrc}/>
                </Fade>
                <Fade bottom>
                  <div>
                    <h3 style={{paddingBottom: '15px',  fontWeight: '300', fontSize: '25px'}}>{valueItem.title}</h3>
                    <span style={{paddingBottom: '15px'}}>{valueItem.desc}</span>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Values;
