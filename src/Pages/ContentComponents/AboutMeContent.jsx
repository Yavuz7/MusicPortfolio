import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import '../ContentComponents/BaseContentStyleSheet.css'

export default function AboutMeContent() {
   document.body.style.overflow='hidden';
    return(
    <>
    <Container className='ContentContainer'>
    <Card className= "text-start fs-3 mt-3" style={{ width: '55vw', height: '54vh' }}>    
      <Card.Body>
        <Card.Title className='fs-2' >About Me</Card.Title>
        <Card.Text>
          My name is Yavuz, I'm an IT major interested in web development. I'm still experimenting with the different features of react as well some of the different libraries you can find with it. Overall it has been pretty fun, and it's always exciting when projects come together!
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    </>
    )
}