import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../ContentComponents/AboutMeContent.css'

export default function ContactPageContent() {
    document.body.style.overflow='auto';
    return(
    <>
    <Container className='AboutMeContainer'>
    <Card className='mt-5 text-start' style={{ width: '55vw', height: '65vh' }}>    
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Form>
        <Form.Group className='mb-2'>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <Form.Group className='mt-3'>
        <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder='Enter Message'/>
        </Form.Group>

        </Form>
        <Button className='mt-3' variant="primary" type="submit">
        Send Message
      </Button>
      </Card.Body>
    </Card>
    </Container>
    </>
    )
}