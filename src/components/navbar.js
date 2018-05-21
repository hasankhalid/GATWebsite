import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import logo from '../resources/LogoAlone2.svg';
import {IndexLinkContainer} from 'react-router-bootstrap'

class NavBar extends Component {
  render (){
    return (
      <Navbar staticTop={true} style={{backgroundColor: this.props.color, borderColor: this.props.color}} className="navbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="brand" style={{color: this.props.textcolor, display: 'flex', alignItems: 'flex-end'}}>
              <img style={{width: '35px', height: '35px'}} href='/' src={logo} className="App-logo" alt="GAT logo" />
              <IndexLinkContainer style={{paddingLeft: '8px', fontSize: '20px', fontWeight: '300'}} to={'/'}>
                <span className="navtitle gat">GAT CONSULTING</span>
              </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse style={{backgroundColor: this.props.color}}>
          <Nav pullRight>
            {this.props.navitems.length > 0 && this.props.navitems.map((navitem, index) => (
              <IndexLinkContainer key={navitem} to={navitem.replace(/ +/g, "").toLowerCase()}>
                <NavItem key={navitem} className="navitem" eventKey={index} href="#">
                  <span style={{color: this.props.textcolor}} className="navtext">{navitem}</span>
                </NavItem>
              </IndexLinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
