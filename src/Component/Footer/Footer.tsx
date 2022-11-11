import { Link } from 'gatsby'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import {MDBIcon} from 'mdb-react-ui-kit'
import { Buttonstyle } from './styles'

const Footer = () => {
  return (
    <Container>
    <Row prefix='justify-content-end'>
      <Col/>
      <Col/>
      <Col/>
      <Col>
        <Button size='sm' variant='none'> <MDBIcon fab icon="facebook-f" style={Buttonstyle} size='lg' /></Button>
        <Button size='sm' variant='none'> <MDBIcon fab icon="twitter" style={Buttonstyle} size='lg' /></Button>
        <Button size='sm' variant='none'> <MDBIcon fab icon="youtube" style={Buttonstyle} size='lg' /></Button>
        <Button size='sm' variant='none'> <MDBIcon fab icon="linkedin" style={Buttonstyle} size='lg' /></Button>
        <Button size='sm' variant='none'> <MDBIcon fab icon="instagram" style={Buttonstyle} size='lg' /></Button>
      </Col>
        
    </Row>
    </Container>
  )
}

export default Footer