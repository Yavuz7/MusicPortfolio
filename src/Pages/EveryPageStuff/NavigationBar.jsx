import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function NavigationBar(){
    return (
       <>
    <Navbar bg="light" expand="lg" sticky = "left" className="myNav flex-column">
        <Navbar.Brand href="#home"  >Menu</Navbar.Brand>
          <Nav className="myNav me-auto flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
    </Navbar>
       </>
    )
}