import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavigationBar(){
    return (
       <>
       <Container className="position-absolute border-radius myNav">       
    <Navbar bg="none" expand="lg" fixed = "left" className="w-25 flex-column border-radius">       
          <Nav defaultActiveKey="#home" justify className="me-auto flex-column fs-2 w-100 border-radius" variant="pills">     
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light">About Me</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact Me</Nav.Link>
            <div className="navBg"></div>
          </Nav>
    </Navbar>
    </Container>
       </>
    )
}