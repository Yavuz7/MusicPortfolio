import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../ContentComponents/BaseContentStyleSheet.css'
import { useState } from 'react';

export default function ContactPageContent(event) {
    document.body.style.overflow='hidden';

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        alert('Form Submitted!');
      }
      setValidated(true);
    };
    return(
    <>
    <Container className='ContentContainer'>
    <Card className='mt-5 text-start' style={{ width: '55vw', height: '60vmin' }}>    
      <Card.Body>
        <Card.Title className='' >Contact Me</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className='mb-2'>
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
          <Form.Control.Feedback type="invalid">Please enter a name!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email"/>
          <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className='mt-3'>
        <Form.Label>Your Message</Form.Label>
          <Form.Control required as="textarea" rows={4} placeholder='Enter Message'/>
          <Form.Control.Feedback type="invalid">Please enter your message!</Form.Control.Feedback>
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
        Send Message
      </Button>
        </Form>

      </Card.Body>
    </Card>
    </Container>
    </>
    )
}