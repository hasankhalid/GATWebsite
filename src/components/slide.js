import React, {Component} from 'react';
import {Carousel, Button} from 'react-bootstrap'
import MdNavigateNext from 'react-icons/lib/md/navigate-next'
import MdNavigateBefore from 'react-icons/lib/md/navigate-before'
import WASA from '../resources/slides/saad1.jpg'
import PHS from '../resources/slides/PHS.svg'
import PHA from '../resources/slides/pha.jpg'
import {IndexLinkContainer} from 'react-router-bootstrap'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Slide extends Component {
  state = {
    nextIcon: <MdNavigateNext size={65}/>,
    prevIcon: <MdNavigateBefore size={65}/>,
    interval: 5000
  }

  phaInsights = () => {
    window.open("https://gatconsulting.github.io/phainsights", "PHAInsights");
    window.close();
  }

  render (){
    const {nextIcon, prevIcon, interval} = this.state;
    return (
      <div className="slideContain">
        <Carousel className="slide carousel-fade" nextIcon={nextIcon} prevIcon={prevIcon} interval={interval}>
          <Carousel.Item>
            <img style={{objectFit: 'cover', height: '100%', width: '100%'}} alt="slide1" src={WASA} />
            <Carousel.Caption>
              <Zoom>
                <h2 style={{fontWeight: '300', fontSize: '40px'}}>Exploring Penetration of WASA Services Across Colonies in Faisalabad</h2>
              </Zoom>
              <Fade bottom>
                <IndexLinkContainer style={{width: '160px', alignSelf: 'center', marginBottom: '10px', backgroundColor: '#F97F51', borderColor: '#F97F51'}} className="hoverShadow" to='/projects'>
                  <Button bsStyle="primary">Open Projects</Button>
                </IndexLinkContainer>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img style={{objectFit: 'cover', height: '100%', width: '100%'}} alt="slide2" src={PHS} />
            <Carousel.Caption>
              <Zoom>
                <h2 style={{fontWeight: '300', fontSize: '40px'}}>Punjab Healh Survey Round II</h2>
              </Zoom>
              <Fade bottom>
                <IndexLinkContainer style={{width: '160px', alignSelf: 'center', marginBottom: '10px', backgroundColor: '#F97F51', borderColor: '#F97F51'}} className="hoverShadow" to='/projects'>
                  <Button bsStyle="primary">Open Projects</Button>
                </IndexLinkContainer>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img style={{objectFit: 'cover', height: '100%', width: '100%'}} alt="slide3" src={PHA} />
            <Carousel.Caption>
              <Zoom>
                <h2 style={{fontWeight: '300', fontSize: '40px'}}>Monitoring and Evaluation Punjab Horticulture Authority</h2>
              </Zoom>
              <Fade bottom>
                <Button onClick={() => this.phaInsights()} style={{width: '160px', alignSelf: 'center', marginBottom: '10px', backgroundColor: '#F97F51', borderColor: '#F97F51'}} className="hoverShadow" bsStyle="primary">PHA Insights</Button>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Slide;
