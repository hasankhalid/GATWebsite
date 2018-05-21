import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import IoAndroidMail from 'react-icons/lib/io/android-mail';
import hamza from '../resources/team/hamzamalik.jpg'
import baber from '../resources/team/drbaber.jpg'
import nasir from '../resources/team/nasirsaeed.jpg'
import bashir from '../resources/team/bashir.jpg'
import qamar from '../resources/team/qamar.jpg'
import tariqpeer from '../resources/team/tariqpeer.jpg'
import tariqch from '../resources/team/tariqch.jpg'
import usmanm from '../resources/team/usmanmustafa.jpg'
import rehan from '../resources/team/rehan.jpg'
import saqlain from '../resources/team/saqlain.jpg'
import azam from '../resources/team/azam.jpg'
import tariq from '../resources/team/tariq.jpg'
import nazim from '../resources/team/nazim.jpg'
import asghar from '../resources/team/asghar.jpg'
import atif from '../resources/team/atif.jpg'
import imad from '../resources/team/imad.jpg'
import bilal from '../resources/team/bilal.jpg'
import salman from '../resources/team/salmanamalik.jpg'
import saeed from '../resources/team/saeed.jpg'
import nadeem from '../resources/team/nadeem.jpg'
import nadia from '../resources/team/nadiaali.jpg'
import azfar from '../resources/team/azfar.jpg'
import rehana from '../resources/team/rehana.jpg'
import faheem from '../resources/team/faheem.jpg'
import junaid from '../resources/team/junaid.jpg'
import ifra from '../resources/team/ifra.jpg'

class TeamMember extends Component {
  data = [
    { imgsrc: nadeem,
      name: 'Nadeem Masood',
      designation: 'Program Manager',
      past: 'Ms Economics, Ex Consultant World Bank, Ex Director Punjab Education Foundation',
      email: 'pm@gatconsultancy.com' },
    { imgsrc: qamar,
      name: 'Dr Qamar Un Nisa',
      designation: 'Consultant on Health',
      past: 'Public Health Expert, Ex Dean of Medicine: The Institute of Medical Education',
      email: 'qamar@gatconsultancy.com' },
    { imgsrc: asghar,
      name: 'Asghar Chaudhry',
      designation: 'Consultant on Education',
      past: 'CFA, MBA, Consultant Corporate Strategy Coca Cola, Mentor Graphics, Alghanim, Consultant Education across GCC, Central Europe, Pakistan', email: 'asghar.ch@gatconsultancy.com' },
    { imgsrc: salman,
      name: 'Salman Anwar Malik',
      designation: 'Consultant on Finance',
      past: 'FCA, Ex CFO US Apparel, Deputy Managing Director, Punjab Education Foundation', email: 'salmanamalik@gatconsultancy.com' },
    { imgsrc: nadia,
      name: 'Nadia Ali',
      designation: 'Research Associate',
      past: 'Ex Program Officer PITB, Assitant Manager NADRA Lahore', email: 'nadiaali@gatconsultancy.com' },
    { imgsrc: saqlain,
      name: 'Dr Saqlain Raza',
      designation: 'Consultant on Statistics/Data Analysis',
      past: 'PhD Statistics, Assistant Professor COMSATS Islamabad', email: 'nadiaali@gatconsultancy.com' },
    { imgsrc: rehana,
      name: 'Rehana Anwar',
      designation: 'Consultant on Gender',
      past: 'Msc Psychology, Assistant Director PRMP', email: 'rehana@gatconsultancy.com' },
    { imgsrc: azfar,
      name: 'Azfar Faiz',
      designation: 'Manager IT & Networking',
      past: 'MSc Mathematics/Computer Science, Microsft and Sun Certified Professional.', email: 'azfar@gatconsultancy.com' },
    { imgsrc: atif,
      name: 'Atif Salam ',
      designation: 'Field Coordinator',
      past: '', email: 'atifsalam@gatconsultancy.com' },
    { imgsrc: faheem,
      name: 'Faheem Chaudhry',
      designation: 'M&E Supervisor',
      past: '', email: 'faheem@gatconsultancy.com' },
    { imgsrc: tariq,
      name: 'Tariq Safeer',
      designation: 'Field Supervisor',
      past: '', email: 'tariq@gatconsultancy.com' },
    { imgsrc: imad,
      name: 'Imad Lodhi',
      designation: 'Data Administrator',
      past: '', email: 'imad@gatconsultancy.com' },
    { imgsrc: junaid,
      name: 'Junaid Dar',
      designation: 'Industrial TPV Specialist',
      past: '', email: 'junaiddar@gatconsultancy.com' },
    { imgsrc: ifra,
      name: 'Ifra Javed',
      designation: 'Office Assistant',
      past: '', email: 'ifra@gatconsultancy.com' },
    { imgsrc: bilal,
      name: 'Bilal Arshad',
      designation: 'Field Monitoring Coordinator',
      past: '', email: 'bilalarshad@gatconsultancy.com' },
    { imgsrc: azam,
      name: 'Azam Iqbal',
      designation: 'Office Manager North',
      past: '', email: 'azam@gatconsultancy.com' },
    { imgsrc: saeed,
      name: 'Saeed Ahmad',
      designation: 'Office Manager South',
      past: '', email: 'saeed@gatconsultancy.com' },
    { imgsrc: nazim,
      name: 'Nazim Khan',
      designation: 'Field Monitoring Coordinator',
      past: '', email: 'nazim@gatconsultancy.com' }
]

board = [
  { imgsrc: bashir,
    name: 'Justice Bashir A. Mujahid',
    designation: 'Member Board of Directors',
    past: 'Retired High Court Judge' },
  { imgsrc: tariqch,
    name: 'Tariq Chaudhry',
    designation: 'Member Board of Directors',
    past: 'Ex Member Pakistan Senate' },
  { imgsrc: tariqpeer,
    name: 'Tariq Pirzada',
    designation: 'Member Board of Directors',
    past: 'Ex Chief Commissioner Islamabad' },
  { imgsrc: baber,
    name: 'Dr Babar Aziz',
    designation: 'Member Board of Directors',
    past: 'PhD (Economics), Dean of Academic Affairs NIU' },
  { imgsrc: hamza,
    name: 'Dr. Hamza Ali Malik',
    designation: 'Member Board of Directors',
    past: 'Post Doc (Economics), Ex-Director Monetary Policy State Bank Pakistan'},
  { imgsrc: rehan,
    name: 'Muhammad Rehan',
    designation: 'Member Board of Directors',
    past: 'Head of Treasury Middle Office' },
  { imgsrc: nasir,
    name: 'Dr Nasir Ahmad Saeed',
    designation: 'Member Board of Directors',
    past: 'Post Doc (Biological Sciences), Principal Scientist, NIBGE' },
  { imgsrc: usmanm,
    name: 'Dr Usman Mustafa',
    designation: 'Member Board of Directors',
    past: 'PhD (Economics), Head Department of Management Studies, PIDE' }
]

  render () {
    return (
      <Grid>
        <Row className="show-grid" style={{marginBottom: '15px'}}>
        <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '30px'}}>
          <h2 style={{textAlign: 'center', fontWeight: '300', fontSize: '35px'}}>BOARD OF DIRECTORS</h2>
        </Col>
        {this.board.length > 0 && this.board.map((boardMember, index) => (
          <Col key={index} lg={3} md={3} sm={6} xs={12} style={{display: 'flex', flexDirection: 'column', height: '350px'}}>
            <Fade>
              <img src={boardMember.imgsrc} alt="Board Avatar" style={{borderRadius: '50%', alignSelf: 'center', marginBottom: '30px', height: '160px', width: '160px'}}/>
            </Fade>
            <Zoom>
              <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '300'}}>{boardMember.name}</p>
              <p style={{textAlign: 'center', fontSize: '16px',fontWeight: '300'}}>{boardMember.designation}</p>
              <p style={{textAlign: 'center', fontSize: '16px',fontWeight: '300'}}>{boardMember.past}</p>
            </Zoom>
          </Col>
        ))}
        <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '30px'}}>
          <h2 style={{textAlign: 'center', fontWeight: '300', fontSize: '35px'}}>MEET THE TEAM</h2>
        </Col>
        {this.data.length > 0 && this.data.map((teamMember, index) => (
          <Col key={index} lg={4} md={4} sm={6} xs={12} style={{display: 'flex', flexDirection: 'column', height: '400px', alignItems: 'center'}}>
            <Fade>
              <img src={teamMember.imgsrc} alt="Team Avatar" style={{borderRadius: '50%', alignSelf: 'center', marginBottom: '30px', height: '160px', width: '160px'}}/>
            </Fade>
            <Zoom>
              <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '300'}}>{teamMember.name}</p>
              <p style={{textAlign: 'center', fontSize: '16px',fontWeight: '300'}}>{teamMember.designation}</p>
              <p style={{textAlign: 'center', fontSize: '16px',fontWeight: '300'}}>{teamMember.past}</p>
              <p style={{textAlign: 'center', fontSize: '16px',fontWeight: '300'}}><IoAndroidMail/> {teamMember.email}</p>
            </Zoom>
          </Col>
        ))}
        </Row>
      </Grid>
    )
  }
}

export default TeamMember;
