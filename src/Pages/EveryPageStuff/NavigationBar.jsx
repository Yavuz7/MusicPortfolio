import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavigationBar(){
    return (
       <>
       <Container className="position-absolute myNav">
    <Navbar bg="light" expand="lg" fixed = "left" className="myNav flex-column">
          <Nav justify className="me-auto flex-column fs-2 w-100" variant="pills">
            <Nav.Link href="#home" className="">Home</Nav.Link>
            <Nav.Link href="#about" className="">About Me</Nav.Link>
            <Nav.Link href="#contact" className="">Contact Me</Nav.Link>
          </Nav>
    </Navbar>
    </Container>
       </>
    )
}