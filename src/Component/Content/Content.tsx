import React, { useState } from 'react'
import illustrastion from '../../images/Pickup_Illustration.png';
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap"

const Content = () => {

  const [inputValue,setInputValue] = useState({
    Name:"",
    Email:""
  })
  const handleChanges = (eve) => { 
    let formName = eve.target.name;
    let fleldVal = eve.target.value;
    console.log("Name",formName,"Value",fleldVal);
    if (formName==='Name') {
      setInputValue({...inputValue,Name:fleldVal})
    }else{
      setInputValue({...inputValue,Email:fleldVal})
    }
   }
  const handleSubmit=() => { 
      // alert("Input value:",eve)
      // console.log("Name",eve,);
      // console.log("Name",inputValue,);
      alert("you have successfully submitted data "+inputValue.Name)
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

              <Form method='post' onSubmit={(eve) => handleSubmit(eve)}>
                <Row>
                  <Form.Group controlId="formBasicName">
                    <Form.Control name='Name' required onChange={(e)=>handleChanges(e)} style={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 20, fontSize: 12, backgroundColor: 'transparent', borderWidth: 1, borderRadius: 30, borderColor: '#a1a4a9', color: '#a1a4a9' }} type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control name='email' required onChange={(e)=>handleChanges(e)} style={{ marginTop: 10, paddingTop: 8, paddingBottom: 8, paddingLeft: 20, fontSize: 12, backgroundColor: 'transparent', borderWidth: 1, borderRadius: 30, borderColor: '#a1a4a9', color: '#a1a4a9' }} type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Row>
                <Row style={{ padding: 10 }}>
                  <Button variant="outline-primary" size='lg' onClick={handleSubmit} style={{ textTransform: 'none', borderWidth: 1, fontSize: 15, borderRadius: 30, color: '#a1a4a9', borderBlockColor: '#a1a4a9', fontWeight: 'bold', }}>Submit</Button>
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