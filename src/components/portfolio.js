import React, { Component } from 'react'
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap'
import Tilt from 'react-tilt'
import Zoom from 'react-reveal/Zoom';
import pha from '../resources/projects/pha.jpg'
import pha2 from '../resources/projects/pha2.jpg'
import books from '../resources/projects/distributebooks.jpg'
import freebooks from '../resources/projects/freetextbook.jpg'
import improver from '../resources/projects/improverbonus.jpg'
import police from '../resources/projects/police.jpg'
import stateland from '../resources/projects/stateland.jpg'
import supplypha from '../resources/projects/supplypha.jpg'
import wasa from '../resources/projects/wasa.jpg'
import foodandware from '../resources/projects/foodandwarehouse.jpg'
import food from '../resources/projects/food.jpg'
import handicraft from '../resources/projects/handicraft.jpg'
import oral from '../resources/projects/oral.jpg'
import childhealth from '../resources/projects/childhealth.jpg'
import computer from '../resources/projects/computertraining.jpg'
import training from '../resources/projects/training.jpg'
import tab from '../resources/projects/tabdistribute.jpg'
import brick from '../resources/projects/brick.jpg'
import geotag from '../resources/projects/geotag.jpg'
import impacteval from '../resources/projects/geotag2.jpg'
import reenrol from '../resources/projects/reenrol.jpg'
import phsii from '../resources/projects/phsii.jpg'
import pschool from '../resources/projects/pschool.jpg'
import girls from '../resources/projects/girlsschool.jpg'
import pwd from '../resources/projects/pwd.jpg'
import psssp from '../resources/projects/psssp.jpg'
import cutlery from '../resources/projects/cutlery.jpg'

class Portfolio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    show: false,
    currProj: {
      name: '',
      sector: '',
      client: '',
      location: '',
      desc: '',
      startdate: '',
      enddate: '',
      services: ['', '']
    },
    surveyprojects: [{
      name: 'Industry Technology Benchmarking Study for Category III (Cutlery Product)',
      sector: 'Research/Industry',
      client: 'Technology Upgradation and Skill Development Company (TUSDEC), Ministry of Industries , GOP',
      location: 'Districts Sialkot, Wazirabad and Gujranwala in Punjab',
      desc: 'This study involves the determination of the challenges facing the cutlery industry through extensive primary and secondary research, detailed meeting with stakeholders, studying international linkages and markets, analysis of HR needs against existing availability and designing of guidelines and policy recommendations to improve production of this sector.',
      startdate: 'October 2018',
      enddate: 'March 2019',
      services: ['Survey', 'Data Analysis', 'Assessment', 'Recommendations'],
      imagesrc: cutlery
    },{
      name: 'Punjab Health Survey Round II',
      sector: 'Health',
      client: 'Bureau of Statistics, Planning and Development Department, Goverment of Punjab',
      location: 'Punjab',
      desc: 'Punjab Health Survey Round II was a follow up survey to Punjab Health Survey Round I. The target population of the survey were females who had a child of less than 2 years of age. The drawn sample had 18060 households form 903 clusters in the 36 districts of Punjab. Prior to the survey, a listing activity was conducted to list all households. GAT Consulting received a response rate of 86 % and interviewed 15891 mothers of 16478 children. The objective of the survey was to assess key maternal and child healthcare indicators relating to antenatal, postnatal healthcare, skilled birth attendance and immunization.',
      startdate: 'June 2017',
      enddate: 'March 2018',
      services: ['Survey', 'Monitoring', 'Training', 'Data Analysis'],
      imagesrc: phsii
    },{
      name: 'Baseline Survey Supplement Stipend Pilot Program',
      sector: 'Education',
      client: 'World Bank, PMIU(SED)',
      location: 'Southern Punjab',
      desc: 'The Punjab Government in partnership with WHO planned an intervention to double the stipend provided to female students by the government. The baseline survey for the supplement stipend pilot program conducted a survey of respondents(female students, teachers and household residents) in 4400 households and 1300 schools before the intervention and assessed public opinion and enthusiasm over the project to gauge the possible effect on female enrollment in schools as a result of the intervention.',
      startdate: 'July 2014',
      enddate: 'November 2015',
      services: ['Survey', 'Monitoring', 'Training', 'Data Analysis'],
      imagesrc: girls
    },{
      name: 'Endline Survey Supplement Stipend Pilot Program',
      sector: 'Education',
      client: 'World Bank, PMIU(SED)',
      location: 'Southern Punjab',
      desc: 'The Punjab Government in partnership with WHO planned an intervention to double the stipend provided to female students by the government. The endline survey for the supplement stipend pilot program conducted a survey of respondents(female students, teachers and household residents) in 4400 households and 1300 schools after the intervention and assessed effects of the project on female enrollment in schools.',
      startdate: 'May 2015',
      enddate: 'January 2016',
      services: ['Survey', 'Monitoring', 'Training', 'Data Analysis'],
      imagesrc: girls
    },{
      name: 'Android Based Consumer Survey',
      sector: 'Development',
      client: 'WASA Faisalabad',
      location: 'Faisalabad',
      desc: 'In order to improve the billing system of Water and Sanitation Authority (WASA) Faisalabad, 404000 consumers were identified and tagged by GAT Consulting in eight subdivision of Faisalabad. GAT surveyed these households to register new connections and report illegal usage to WASA. The information was collected using Computer-assisted Personal Interviewing (CAPI) technique. Bills were checked to verify whether correct tariffs were being applied according to the property size. GIS sheets by WASA were also updated by GAT in response to newly developed and merged properties.',
      startdate: 'October 2016',
      enddate: 'March 2018',
      services: ['Survey', 'Monitoring', 'Training'],
      imagesrc: wasa
    },{
      name: 'Follow-up Improvers Bonus Program School Survey',
      sector: 'Education',
      client: 'PMIU',
      location: 'Punjab',
      desc: 'This survey gauged the impact of increasing salaries of teachers on the quality of education provided to children to children from class 6 to 9. The survey interviewed teachers and school administration and conducted assessment tests of students from grade 6 to grade 9 to assess the impact of the bonus program on the quality of education being provided.',
      startdate: 'May 2015',
      enddate: 'August 2015',
      services: ['Survey', 'Monitoring', 'Training'],
      imagesrc: improver
    },{
      name: 'Diagnostic Study of Industrial and Handicraft Clusters',
      sector: 'Research',
      client: 'Punjab Small Industries Corporation',
      location: 'Gujranwala, Sialkot, Wazirabad',
      desc: 'This objective of this study was to assess both operational and administrative issues faced by industries that lead to a decrease in exports. This diagnostic study was conducted in 6 clusters and the industries studied were of 6 categories, namely gloves, leather, sport, surgical, musical and composite based material goods. GAT’s team visited all industries and evaluated operational and administrative difficulties faced by the industry staff and administration that could lead to a decrease in the industry’s exports.',
      startdate: 'February 2016',
      enddate: 'May 2016',
      services: ['Survey', 'Data Analysis', 'Monitoring'],
      imagesrc: handicraft
    },{
      name: 'Strategic Impact Evaluation Fund - Community Engagement for Education',
      sector: 'Education',
      client: 'The World Bank',
      location: 'Interior Sindh',
      desc: 'DD',
      startdate: 'January 2015',
      enddate: 'November 2015',
      services: ['Survey', 'Third Party Validation', 'Monitoring', 'Training'],
      imagesrc: impacteval
    },{
      name: 'Baseline and End Line Study for Distribution of PC Tablets to Students',
      sector: 'Research',
      client: 'Punjab Information Technology Board',
      location: 'Punjab',
      desc: 'GAT Consulting carried out a baseline and endline study for distribution of PC tablets to students in 76 schools. Assessment tests were conducted of both the targeted population(students who received tablets) and the non targeted population (students who did not receive tablets). The objective of the study was to assess the effects of provision of PC tablets on the learning of students.',
      startdate: 'November 2016',
      enddate: 'February 2017',
      services: ['Survey', 'Evaluation', 'Testing'],
      imagesrc: tab
    },{
      name: 'Survey of Childrens Health in Private Schools Phase 2',
      sector: 'Health and Research',
      client: 'HCBE',
      location: 'Lahore',
      desc: 'This survey collected data from 69 head teachers, 414 class teachers and 7689 students regarding their basic health care. Workshops were conducted to provide school staff and students basic knowledge of first aid and disaster management. Interactive demonstrations were made to increase awareness of basic hygiene among students and the school staff.',
      startdate: 'September 2012',
      enddate: 'November 2012',
      services: ['Survey', 'Monitoring', 'Data Analysis'],
      imagesrc: childhealth
    },{
      name: 'Impact Analysis of Oral Hygiene in Gajjumata schools',
      sector: 'Health and Research',
      client: 'HCBE',
      location: 'Lahore',
      desc: 'The survey collected data from 11 head teachers, 234 class teachers and 2574 students and assessed effects of oral hygiene on student motivation and productivity. This project intended to gain an understanding of the effect of health on education',
      startdate: 'December 2011',
      enddate: 'May 2012',
      services: ['Survey', 'Monitoring', 'Data Analysis'],
      imagesrc: oral
    },{
      name: 'Primary School Baseline Survey',
      sector: 'Education',
      client: 'HCBE',
      location: 'Central Punjab',
      desc: 'GAT conducted a baseline survey to identify dropout rates among school children and assess the possible reasons that motivate young students to drop out of schools and opt for manual labor.',
      startdate: 'April 2012',
      enddate: 'May 2012',
      services: ['Survey', 'Monitoring', 'Data Analysis'],
      imagesrc: pschool
    },{
      name: 'Stateland Mapping',
      sector: 'District Administration',
      client: 'District Administration Toba Tek Singh',
      location: 'TT Singh',
      desc: 'GIS Mapping of stateland, All land under the acquisition of the government was tagged and shared with the district administration',
      startdate: 'December 2010',
      enddate: 'January 2011',
      services: ['Monitoring and Evaluation', 'Data Analysis and Visualization'],
      imagesrc: stateland
    }],
    tpvprojects: [{
      name: 'Assessment of Learning Outcomes of Students of Community & Government Schools in PPR Supported Districts',
      sector: 'Education',
      client: 'Pakistan Poverty Alleviation Fund (PPAF)',
      location: '2 districts each of KPK and Baluchistan',
      desc: 'This project is currently in progress',
      startdate: 'July 2019',
      enddate: 'November 2019 (Expected)',
      services: ['Third Party Validation', 'Survey', 'Training', 'Development of Assessment Tools'],
      imagesrc: books
    },{
      name: 'Third Party Validation of Non – Salary Reforms (NSB) 2015/16, 2016/17 and 2017/18',
      sector: 'Education',
      client: 'Cambridge Education',
      location: '12 districts of Punjab',
      desc: 'This was a highly intensive TPV taken within a very short span of time to meet FY deadlines. The purpose of this validation exercise was to determine the benefits of the NSB on schools. It required interviews at 369 schools in 12 districts of Punjab along with interviews of district management officials (CEO, DAO, DEO and AEO) in all districts. 12 focus group discussions were also undertaken of School Council members as well as influential members of society. The School Education Department intends to strengthen the design and implementation of this school specific non salary budget. Auditors were specially hired to carry of the field work of getting the financial information from the Head Teachers.',
      startdate: 'April 2019',
      enddate: 'May 2019',
      services: ['Third Party Validation', 'Survey', 'Data Analysis and Visualization', 'Training', 'Application Development'],
      imagesrc: girls
    },{
      name: 'Third Party Validation of Punjab Secondary School Stipend Programme (PSSSP III)',
      sector: 'Education',
      client: 'Cambridge Education',
      location: '16 districts of Punjab',
      desc: 'TPV of the PSSSP III project required interviews at 285 schools in all 16 districts of primarily South Punjab. Interviews with 285 Head Teachers and 560 selected and random girl students receiving the stipend and their parents was undertaken. The TPV’s purpose was to verify beneficiary data, enrolment, attendance, and disbursement information of the programme. The findings from the TPV will be used to strengthen the Girls’ Stipend Programme to increase transition to, and retention in, secondary schools.',
      startdate: 'April 2019',
      enddate: 'May 2019',
      services: ['Third Party Validation', 'Survey', 'Data Analysis and Visualization', 'Training', 'Application Development'],
      imagesrc: psssp
    },{
      name: 'TPV of Public Awareness Campaign / Media Plan',
      sector: 'Health',
      client: 'Population Welfare Department',
      location: 'Punjab',
      desc: 'The population welfare department conducted a media campaign to increase awareness for family planning among the public. During the TPV, GAT conducted focus group sessions to assess the degree to which the media campaign managed to generate awareness. An additional survey was carried out to assess the effects of the media campaign on public thinking. The project was carried out across all districts of Punjab.',
      startdate: 'March 2017',
      enddate: 'July 2017',
      services: ['Third Party Validation (Impact Evaluation)'],
      imagesrc: pwd
    },{
      name: 'TPV for Brick Kiln Students',
      sector: 'Education',
      client: 'Population Welfare Department',
      location: 'Punjab',
      desc: 'The Brick Kiln Project was launched by the government to enrol young bonded laborers from brick kilns in school. As a result of this project 17250 kids were enrolled in schools. The government provided them incentives including books, uniforms and stipends. The objective of the TPV was the monitor the progress made by the project in increasing student retention and decreased student dropout rates in schools. The project also monitored the service delivery of the incentives provided by the government to these children and their families.',
      startdate: 'October 2016',
      enddate: 'January 2017',
      services: ['Third Party Validation, Data Analysis'],
      imagesrc: brick
    },{
      name: 'TPV 1 & 2 (Geo Tagging of Schools, Mauzas and Settlements)',
      sector: 'Education',
      client: 'Cambridge Education, World Bank',
      location: 'Southern Punjab',
      desc: 'A third party validation was conducted to validate geotagged locations of schools, mauzas and settlements in the 36 districts across Punjab. The objective of the validation was to ensure the accuracy of the geotagged locations so that the sample for the girls supplement stipend program could be drawn',
      startdate: 'April 2014',
      enddate: 'December 2015',
      services: ['Third Party Validation', 'Survey'],
      imagesrc: geotag
    },{
      name: 'TPV of Food Hampers and Warehouse Equipment',
      sector: 'Disaster Management',
      client: 'Provincial Disaster Management Authority',
      location: 'Lahore, Muzaffargarh',
      desc: 'TPV of Food Hampers procured by PDMA to ensure all items procured confirmed to the required quality specifications. An objective of the TPV also to guage the performance and functional status of warehouse equipment which includes chillers and fire safety equipment.',
      startdate: 'August 2016',
      enddate: 'June 2017',
      services: ['Third Party Validation'],
      imagesrc: foodandware
    },{
      name: 'TPV of Food Hampers',
      sector: 'Disaster Management',
      client: 'Provincial Disaster Management Authority',
      location: 'Lahore, Muzaffargarh',
      desc: 'TPV of Food Hampers procured by PDMA to check all items confirmed to the required quality specifications.',
      startdate: 'June 2015',
      enddate: 'June 2016',
      services: ['Third Party Validation'],
      imagesrc: food
    }],
    mneprojects: [{
      name: 'Evaluation of reenrollment of children in schools',
      sector: 'Education',
      client: 'School Education Department',
      location: 'Central Punjab',
      desc: 'Baseline survey carried out to identify the re enrollment rates of dropout students in schools. The survey gathered data about the factors that lead to increased student retention decreased drop out rates.',
      startdate: 'February 2011',
      enddate: 'May 2011',
      services: ['Survey', 'Monitoring and Evaluation'],
      imagesrc: reenrol
    },{
      name: 'Geotracking for Police Vehicles',
      sector: 'Police',
      client: 'Police Department',
      location: 'Central Punjab',
      desc: 'Tracking of Police vehicles to assist district administration. IT based computer logs were maintained to ensure an audit trail of all vehicles.',
      startdate: 'December 2010',
      enddate: 'January 2011',
      services: ['Monitoring and Evaluation', 'Data Analysis and Visualization'],
      imagesrc: police
    }],
    supplyprojects: [{
      name: 'Distribution of Text Books',
      sector: 'Education',
      client: 'Punjab Education Foundation',
      location: 'Punjab',
      desc: 'Distribution of textbooks to more than 2000 PEF schools in all 36 districts of Punjab.',
      startdate: 'April 2015',
      enddate: 'August 2015',
      services: ['Supply and Logistics', 'Distribution'],
      imagesrc: books
    },{
      name: 'Supply of Plants to PHA',
      sector: 'Development',
      client: 'Punjab Horticulture Authority',
      location: 'Bahawalpur',
      desc: 'GAT Consulting supplied 38 types of plants to PHA Bahawalpur as per contract specifications.',
      startdate: 'August 2016',
      enddate: 'October 2016',
      services: ['Supply and Logistics', 'Distribution'],
      imagesrc: supplypha
    },{
      name: 'Delivery of Free Text Books to public schools',
      sector: 'Education',
      client: 'Punjab Education Foundation',
      location: 'Punjab',
      desc: 'Delivery of text books to 2000 PEF schools across 36 districts of Punjab which was followed by a survey of teachers, staff and school administration about the administrative and operational issues faced by the schools. GAT Consulting conducted analysis and provided reporting to PEF over possible improvements that could be made',
      startdate: 'April 2015',
      enddate: 'August 2015',
      services: ['Supply and Logistics', 'Distribution'],
      imagesrc: freebooks
    }],
    trainprojects: [{
      name: 'Cluster Based Trainings Offered to Teachers',
      sector: 'Education',
      client: 'School Education Department',
      location: 'Punjab',
      desc: 'Trainings offered to 11668 Primary and Secondary school teachers in Private, Public and PEF schools by certified trainers all over Punjab. 29 source personnel were involved to train teachers, increase their awareness and conduct seperate 3 day, 6 day and 3 week exercises to motivate teachers and build their capacity. The teachers were enrolled and registered for this exercise intended to improve their pedagogical skills.',
      startdate: 'July 2007',
      enddate: 'March 2013',
      services: ['Training'],
      imagesrc: training
    },{
      name: 'Establishment of Computer Training Centre',
      sector: 'Education',
      client: 'Higher Education Department',
      location: 'Punjab',
      desc: 'Conducted training sessions for 27786 students to build their knowledge of IT and build their capacity in basic software and website development. The trainings also conducted presentation workshops and workshops for microsoft Office.',
      startdate: 'July 2011',
      enddate: 'March 2013',
      services: ['Training'],
      imagesrc: computer
    }]
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  phaInsights = () => {
    window.open("https://gatconsulting.github.io/phainsights", "PHAInsights");
    window.close();
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid" style={{marginBottom: '15px'}}>
          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '20px', fontWeight: '300', fontSize: '35px'}}>FEATURED PROJECTS</h2>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'left', marginBottom: '20px', fontWeight: '300', fontSize: '25px'}}>SURVEYS/RESEARCH</h2>
          </Col>
          {this.state.surveyprojects.length > 0 && this.state.surveyprojects.map((surveyproj, index) => (
            <Col key={index} lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
              <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
                <div onClick={() => this.setState({show: true, currProj: {name: surveyproj.name, sector: surveyproj.sector, client: surveyproj.client, location: surveyproj.location,
                  desc: surveyproj.desc, startdate: surveyproj.startdate, enddate: surveyproj.enddate, services: surveyproj.services}})} style={{position: 'relative'}}>
                  <img alt="Survey Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={surveyproj.imagesrc}/>
                  <Zoom>
                  <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(243, 132, 170, 0.5)', width: '100%'}}>
                    <h3 className="responsiveProjTitle" style={{textAlign: 'center', marginLeft: '2px', marginRight: '2px', fontWeight: '300'}}>{surveyproj.name}</h3>
                    <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: {surveyproj.sector}</p>
                  </div>
                  </Zoom>
                </div>
              </Tilt>
            </Col>
          ))}
          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'left', marginBottom: '20px', fontWeight: '300', fontSize: '25px'}}>THIRD PARTY VALIDATIONS</h2>
          </Col>
          {this.state.tpvprojects.length > 0 && this.state.tpvprojects.map((tpvproj, index) => (
            <Col key={index} lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
              <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
                <div onClick={() => this.setState({show: true, currProj: {name: tpvproj.name, sector: tpvproj.sector, client: tpvproj.client, location: tpvproj.location,
                  desc: tpvproj.desc, startdate: tpvproj.startdate, enddate: tpvproj.enddate, services: tpvproj.services}})} style={{position: 'relative'}}>
                  <img alt="TPV Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={tpvproj.imagesrc}/>
                  <Zoom>
                  <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(116, 137, 232, 0.5)', width: '100%'}}>
                    <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>{tpvproj.name}</h3>
                    <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: {tpvproj.sector}</p>
                  </div>
                  </Zoom>
                </div>
              </Tilt>
            </Col>
          ))}
          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'left', marginBottom: '20px', fontWeight: '300', fontSize: '25px'}}>MONITORING AND EVALUATIONS</h2>
          </Col>
          <Col lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
            <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
              <div onClick={() => this.phaInsights()} style={{position: 'relative'}}>
                <img alt="M&E Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={pha}/>
                <Zoom>
                <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(243, 132, 170, 0.5)', width: '100%'}}>
                  <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>M&E for Parks and Horticulture Authority Phase 1</h3>
                  <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: Development</p>
                </div>
                </Zoom>
              </div>
            </Tilt>
          </Col>
          <Col lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
            <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
              <div onClick={() => this.phaInsights()} style={{position: 'relative'}}>
                <img alt="M&E Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={pha2}/>
                <Zoom>
                <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(243, 132, 170, 0.5)', width: '100%'}}>
                  <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>M&E for Parks and Horticulture Authority Phase 2</h3>
                  <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: Development</p>
                </div>
                </Zoom>
              </div>
            </Tilt>
          </Col>
          {this.state.mneprojects.length > 0 && this.state.mneprojects.map((mneproj, index) => (
            <Col key={index} lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
              <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
                <div onClick={() => this.setState({show: true, currProj: {name: mneproj.name, sector: mneproj.sector, client: mneproj.client, location: mneproj.location,
                  desc: mneproj.desc, startdate: mneproj.startdate, enddate: mneproj.enddate, services: mneproj.services}})} style={{position: 'relative'}}>
                  <img alt="M&E Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={mneproj.imagesrc}/>
                  <Zoom>
                  <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(243, 132, 170, 0.5)', width: '100%'}}>
                    <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>{mneproj.name}</h3>
                    <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: {mneproj.sector}</p>
                  </div>
                  </Zoom>
                </div>
              </Tilt>
            </Col>
          ))}

          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'left', marginBottom: '20px', fontWeight: '300', fontSize: '25px'}}>SUPPLIES AND LOGISTICS</h2>
          </Col>
          {this.state.supplyprojects.length > 0 && this.state.supplyprojects.map((supplyproj, index) => (
            <Col key={index} lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
              <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
                <div onClick={() => this.setState({show: true, currProj: {name: supplyproj.name, sector: supplyproj.sector, client: supplyproj.client, location: supplyproj.location,
                  desc: supplyproj.desc, startdate: supplyproj.startdate, enddate: supplyproj.enddate, services: supplyproj.services}})} style={{position: 'relative'}}>
                  <img alt="Supply Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={supplyproj.imagesrc}/>
                  <Zoom>
                  <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(64, 63, 99, 0.5)', width: '100%'}}>
                    <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>{supplyproj.name}</h3>
                    <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: {supplyproj.sector}</p>
                  </div>
                  </Zoom>
                </div>
              </Tilt>
            </Col>
          ))}

          <Col lg={12} md={12} sm={12} xs={12} style={{marginBottom: '15px'}}>
            <h2 style={{textAlign: 'left', marginBottom: '20px', fontWeight: '300', fontSize: '25px'}}>TRAININGS</h2>
          </Col>
          {this.state.trainprojects.length > 0 && this.state.trainprojects.map((trainproj, index) => (
            <Col key={index} lg={3} md={3} sm={4} xs={6} style={{marginBottom: '15px'}}>
              <Tilt className="Tilt" options={{ max : 15 }} style={{ height: '100%', width: '100%' }} >
                <div onClick={() => this.setState({show: true, currProj: {name: trainproj.name, sector: trainproj.sector, client: trainproj.client, location: trainproj.location,
                  desc: trainproj.desc, startdate: trainproj.startdate, enddate: trainproj.enddate, services: trainproj.services}})} style={{position: 'relative'}}>
                  <img alt="Training Project" style={{width: '100%', objectFit: 'cover', filter: 'grayscale(100%)'}} src={trainproj.imagesrc}/>
                  <Zoom>
                  <div style={{position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(195, 104, 145, 0.5)', width: '100%'}}>
                    <h3 className="responsiveProjTitle" style={{textAlign: 'center', fontWeight: '300'}}>{trainproj.name}</h3>
                    <p className="responsiveProjSector" style={{textAlign: 'center', fontWeight: '300', fontSize: '14px'}}>Sector: {trainproj.sector}</p>
                  </div>
                  </Zoom>
                </div>
              </Tilt>
            </Col>
          ))}

        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header style={{backgroundColor: '#1976D2', color: 'white', paddingTop: '45px'}} closeButton>
            <Modal.Title style={{fontSize: '24px', fontWeight: '300'}}>{this.state.currProj.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Client</h4>
            <p style={{fontSize: '16px', fontWeight: '300'}}>
              {this.state.currProj.client}
            </p><hr />

            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Sector</h4>
            <p style={{fontSize: '16px', fontWeight: '300'}}>
              {this.state.currProj.sector}
            </p><hr />

            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Project Location</h4>
            <p style={{fontSize: '16px', fontWeight: '300'}}>
              {this.state.currProj.location}
            </p><hr />

            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Description</h4>
            <p style={{fontSize: '16px', fontWeight: '300'}}>
              {this.state.currProj.desc}
            </p><hr />

            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Timeline</h4>
            <p style={{fontSize: '16px', fontWeight: '300'}}>
              {this.state.currProj.startdate} - {this.state.currProj.enddate}
            </p><hr />

            <h4 style={{fontSize: '20px', fontWeight: '300'}}>Services Offered</h4>
              <ul>
                {this.state.currProj.services.length > 0 && this.state.currProj.services.map((serviceItem, index) => (
                  <li style={{fontSize: '16px', fontWeight: '300'}} key={index}>{serviceItem}</li>
                ))}
              </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{backgroundColor: '#E91E63', color: 'white'}} onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    )
  }
}

export default Portfolio;
