import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Route,Routes, Link,BrowserRouter } from "react-router-dom";

import AboutMePage from "../MainPages/AboutMePage";
import Homepage from "../MainPages/Homepage";
import ContactPage from "../MainPages/ContactPage";

export default function NavigationBar(){
    return (
       <>    
       <BrowserRouter>  
       <Container className="position-absolute border-radius myNav">       
         <Navbar bg="none" expand="lg" fixed = "left" className="w-25 flex-column border-radius">       
          <Nav defaultActiveKey="#home" justify className="me-auto flex-column fs-2 w-100 border-radius">     
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutme" className="text-light">About Me</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact Me</Nav.Link>
            <div className="navBg"></div>
          </Nav>
         </Navbar>
      </Container>
      
         <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/aboutme" element={<AboutMePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
         </Routes>
      </BrowserRouter>   
       </>
    )
}