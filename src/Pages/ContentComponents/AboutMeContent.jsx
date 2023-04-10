import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import '../ContentComponents/AboutMeContent.css'

export default function AboutMeContent() {
    return(
    <>
    <Container className='AboutMeContainer'>
    <Card style={{ width: '55vw', height: '50vh' }}>    
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          This section goes over some things about me. 
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    </>
    )
}