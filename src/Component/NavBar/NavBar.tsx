import { Link } from 'gatsby'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import {MDBIcon} from 'mdb-react-ui-kit'
import { logoTextStyle, navItemButtonStyle, navItemIconStyle, navItemStyle, navItemTextStyle } from './styles'


 const NavBar = () => {
   return (
       <nav className="navbar">
           <Container  className='container-fluid container-sm'>
            <Row lg={1}>
                   <Nav.Link href='#Home'>
                           <h3 style={logoTextStyle}>OPENAUTO</h3>
                       </Nav.Link>
                   
                   </Row>
                   <Row lg={12}>
                   <Col md={3} style={navItemStyle}>
                   <MDBIcon icon="phone" style={navItemIconStyle} size='xs' />
                       <span style={navItemTextStyle}>   +769 586 4558</span>
                   </Col>
                   <Col md={4} style={navItemStyle}>
                       <MDBIcon icon="envelope" style={navItemIconStyle} size='xs'/>
                       <span style={navItemTextStyle}>  Service@openauto.ca</span>
                   </Col>
                   <Col>
                    <Nav.Link href='#download'>
                       <Button variant="outline-primary" style={navItemButtonStyle}>Download the mobile app</Button>
                       </Nav.Link>
                   </Col>
                   </Row>
           </Container>
       </nav>
       
   )
 }
 
 export default NavBar