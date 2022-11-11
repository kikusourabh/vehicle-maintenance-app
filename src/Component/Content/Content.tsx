import React, { useState } from 'react'
import illustrastion from '../../images/Pickup_Illustration.png';
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap"

const Content = () => {

  const [inputValue,setInputValue] = useState({
    Name:"",
    Email:""
  })
  const handleSubmit=(eve) => { 
      alert("Input value:",eve.target)
   }
  return (
    <Container>
        <Row style={{ paddingTop: 30 }}>
          <Col style={{ paddingTop: 40 }}>
            <Stack>
              <h2 style={{ color: '#cfd1d4' }}>
                Vehicle Maintenance <br />
                Form the comfert of <br />
                your home <br />
              </h2>
              <span style={{ color: '#a1a4a9' }}>
                Open Auto Soothes the hassle of maintaining your vehicle and helps <br />
                you deal with unexpected repairs worry-free <br />
              </span>
              <Row md={2} style={{marginTop:50}}>

              <Form onSubmit={(eve)=>handleSubmit(eve)}>
              <Row>
                <Form.Group controlId="formBasicName">
                  <Form.Control required onChange={(e)=>setInputValue(e.target.value,inputValue?.Email)} style={{paddingTop:8,paddingBottom:8,paddingLeft:20, fontSize:12, backgroundColor:'transparent',borderWidth:1, borderRadius:30, borderColor:'#a1a4a9', color:'#a1a4a9'}} type="text" placeholder="Enter your name" />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control required onChange={(e)=>setInputValue(inputValue?.Name,e.target.value)} style={{marginTop:10,paddingTop:8,paddingBottom:8,paddingLeft:20, fontSize:12,backgroundColor:'transparent',borderWidth:1, borderRadius:30, borderColor:'#a1a4a9', color:'#a1a4a9'}} type="email" placeholder="Enter your email" />
                </Form.Group>
                </Row>
                <Row style={{padding:10}}>
                <Button  variant="outline-primary" size='lg' type="submit" style={{textTransform:'none',borderWidth:1,fontSize:15,borderRadius:30, color:'#a1a4a9',borderBlockColor:'#a1a4a9', fontWeight:'bold', }}>Submit</Button>          
                </Row>
              </Form>
              </Row>
            </Stack>
          </Col>
          <Col>
            <img src={illustrastion} alt="Logo" height={400} />
          </Col>
        </Row>
      </Container>
  )
}

export default Content