import React, { Component } from 'react'
import NavBar from '../components/navbar'
import ServiceComponent from '../components/service'
import InNumbers from '../components/innumbers.js'
import surveys from  '../resources/icons/serviceSurvey.svg'
import TPV from  '../resources/icons/serviceTPV.svg'
import Mon from  '../resources/icons/serviceMon.svg'
import Data from  '../resources/icons/serviceData.svg'
import Training from  '../resources/icons/serviceTraining.svg'
import Supply from  '../resources/icons/serviceSupply.svg'

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  servicedata = [{
    imglink: surveys,
    title: 'Surveys',
    desc: 'Our survey design methodology uses best practices to increase survey response rates and utilises quality assurance mechanisms to ensure data quality and integrity. We make use of computer assisted interviewing with easily usable applications to assist our enumerators in data entry and ensure data quality. In collaboration with our partners, we use tracklive technology to track the realtime movement of our enumerators to make our process more efficient and transparent.',
  },{
    imglink: TPV,
    title: 'Third Party Validations',
    desc: 'GAT Consulting provides Third Party Validation (TPV) services to public and donor agencies across various sectors. The TPV services that we have provided thus far include data validation through independent surveys and verification of goods, equipment and public services. GAT Consulting provides an impartial and independent analysis as part of its TPVs',
  },{
    imglink: Mon,
    title: 'Monitoring and Evaluation',
    desc: 'Our M&E dashboards are developed using the latest technologies and are tailor-made according to our clients requirements and organizational procedures. Our M&E services aim to improve performance, impact, sustainability and value for money for our clients in both public and private sectors. GAT Consulting develops comprehensive M&E plans according to our clients specific requirements. GAT believes in involving our clients in the decision making process to establish trust and ensure quality and reliability of our systems.',
  },{
    imglink: Data,
    title: 'Data Analysis and Visualization',
    desc: 'Our interactive visualizations and dashboards allow our clients to identify data trends and patterns which assist them in effective decision making. In collaboration with our partners, GAT Consulting offers services which aim to convert historical and real time data into meaningful insights and accurate forecasting tools.',
  },{
    imglink: Training,
    title: 'Trainings',
    desc: 'GAT Consulting also trains professionals from organizations aiming to build capacity of their staff in survey management, data collection, data analysis and monitoring and evaluation. We customize our comprehensive training modules on the basis of requirements and needs of the organizations',
  },{
    imglink: Supply,
    title: 'Supplies and Logistics',
    desc: 'In addition to our core services, GAT Consulting also has the capacity to manage complex logistics and end to end supply operations in collaboration with its partners. In the past GAT Consulting has managed logistics and supplies of books, engineering and horticultural equipment for its clients.',
  }]

  numberdata = [{
    number: '25+',
    color: '#3F51B5',
    subheading: 'clients served'

  },{
    number: '50+',
    color: '#FF9800',
    subheading: 'projects completed'

  },{
    number: '60+',
    color: '#673AB7',
    subheading: 'districts covered'

  },{
    number: '20+',
    color: '#4CAF50',
    subheading: 'projects in Health and Education'

  }]

  render () {
    return (
      <div className="App">
        <NavBar color='#7B1FA2' textcolor='white' navitems={['ABOUT US', 'SERVICES', 'PROJECTS', 'OUR TEAM']}/>
        <div className="titleContain" style={{backgroundColor: '#7B1FA2', marginBottom: '50px'}}>
          <h2 style={{fontWeight: '300', fontSize: '40px'}}>What We Do</h2>
        </div>
        <InNumbers data={this.numberdata}/>
        <ServiceComponent data={this.servicedata}/>
      </div>
    )
  }
}

export default Services;
