import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import '../ContentComponents/AboutMeContent.css'

export default function ContactPageContent() {
    document.body.style.overflow='hidden';
    return(
    <>
    <Container className='AboutMeContainer'>
    <Card style={{ width: '55vw', height: '53vh' }}>    
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Card.Text>
          This section is the contact forum
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    </>
    )
}