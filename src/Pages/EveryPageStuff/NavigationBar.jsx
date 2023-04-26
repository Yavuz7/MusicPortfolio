import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  NavItem  from "react-bootstrap/NavItem";
import {HashRouter,Routes,Route, Link, } from "react-router-dom";

import AboutMePage from "../MainPages/AboutMePage";
import Homepage from "../MainPages/Homepage";
import ContactPage from "../MainPages/ContactPage";
import MusicPreviewPage from "../MainPages/MusicPreviewPage";



export default function NavigationBar(){
    return (
       <>    
       <HashRouter basename="/">  
       <Container className="position-absolute border-radius myNav">       
         <Navbar bg="none" expand="lg" fixed = "left" className="w-100 flex-column border-radius">       
          <Nav defaultActiveKey="#home" justify className="me-auto flex-column w-100 border-radius"> 
          <NavItem>
            <Nav.Link as={Link} to="/" className="mx-5 text-light">Home</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as={Link} to="/musicPreviewPage" className="mx-5 text-light">My Music</Nav.Link>  
         </NavItem>  
         <NavItem>
            <Nav.Link as={Link} to="/aboutme" className="mx-5 text-light">About Me</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as={Link} to="/contact" className="mx-5 text-light">Contact Me</Nav.Link>  
         </NavItem>
      
          </Nav>
         </Navbar>
      </Container>
         <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/aboutme" element={<AboutMePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/musicPreviewPage" element={<MusicPreviewPage/>}/>
         </Routes>
      </HashRouter>   
       </>
    )
}