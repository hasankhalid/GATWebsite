import React, { Component } from 'react'
import NavBar from '../components/navbar'
import TeamMember from '../components/teammember'

class Team extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div className="App">
        <NavBar color='#D32F2F' textcolor='white' navitems={['ABOUT US', 'SERVICES', 'PROJECTS', 'OUR TEAM']}/>
        <div className="titleContain" style={{backgroundColor: '#D32F2F', marginBottom: '50px'}}>
          <h2 style={{fontWeight: '300', fontSize: '40px'}}>Our Team</h2>
        </div>
        <TeamMember/>
      </div>
    )
  }
}

export default Team;
