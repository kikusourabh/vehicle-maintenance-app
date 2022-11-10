import { Link } from 'gatsby'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'

 const NavBar = () => {
   return (
       <nav className="navbar">
           <Container className='container-fluid container-sm'>
                   <Col>
                       <Link>
                           <h3>OPENAUTO</h3>
                       </Link>
                   </Col>
                   <Row>
                   <Col>
                       <Link>+769 586 4558 </Link>
                   </Col>
                   <Col>
                       <Link>Service@openauto.ca </Link>
                   </Col>
                   <Col>
                       <Link>Download the mobile app </Link>
                   </Col>
                   </Row>
           </Container>
       </nav>
       
   )
 }
 
 export default NavBar