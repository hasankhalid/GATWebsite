import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';


class TextContain extends Component {
  render () {
    return (
        <Col style={{textAlign: 'left', fontSize: '16px'}} lg={6} md={6} sm={6} xs={12}>
          <div className="box" style={{height: '350px', justifyContent: 'space-evenly', backgroundColor: '#' + this.props.data.color, color: 'white'}}>
            <Fade>
              <h2 className="removeI" style={{alignSelf: 'center', paddingTop: '35px', paddingBottom: '35px',fontWeight: '300', fontSize: '34px'}}>{this.props.data.title}</h2>
            </Fade>
            <Fade>
              <p style={{paddingBottom: '35px', textAlign: 'justify', fontSize: '16px', fontWeight: '300'}}>{this.props.data.body}</p>
            </Fade>
          </div>
        </Col>

    )
  }
}

export default TextContain;
