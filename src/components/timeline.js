import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class TimeLine extends Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} xs={12}>
            <Fade>
              <div className="valueTitle">
                <h2 style={{textAlign: 'center', paddingTop: '35px', fontWeight: '300', fontSize: '35px'}}>OUR HISTORY</h2>
              </div>
            </Fade>
          </Col>
          <Col lg={12} md={12} xs={12}>
          <div className="page-header">
          </div>
            <ul className="timeline">
              {this.props.data.length > 0 && this.props.data.map((timelineItem, index) => (
                <Zoom key={index}>
                <li className={timelineItem.classN}>
                  <div className="timeline-badge" style={{backgroundColor: timelineItem.bgcolor}}></div>
                  <div className="timeline-panel" style={{borderRadius: '10px'}}>
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{timelineItem.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>{timelineItem.body}</p>
                    </div>
                  </div>
                </li>
                </Zoom>
              ))}
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default TimeLine;
