import "../EveryPageStuff/NavigationBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  NavItem  from "react-bootstrap/NavItem";
import {HashRouter as Routes,Route, Link, } from "react-router-dom";

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
          <Nav defaultActiveKey="#home" justify className="me-auto flex-column fs-2 w-100 border-radius"> 
          <NavItem>
            <Nav.Link as={Link} to="/MusicPortfolio" className="mx-5 text-light">Home</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as={Link} to="/MusicPortfolio/musicPreviewPage" className="mx-5 text-light">My Music</Nav.Link>  
         </NavItem>  
         <NavItem>
            <Nav.Link as={Link} to="/MusicPortfolio/aboutme" className="mx-5 text-light">About Me</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as={Link} to="/MusicPortfolio/contact" className="mx-5 text-light">Contact Me</Nav.Link>  
         </NavItem>
      
          </Nav>
         </Navbar>
      </Container>
         <Routes>
            <Route exact path="/MusicPortfolio" element={<Homepage/>}/>
            <Route path="/MusicPortfolio/aboutme" element={<AboutMePage/>}/>
            <Route path="/MusicPortfolio/contact" element={<ContactPage/>}/>
            <Route path="/MusicPortfolio/musicPreviewPage" element={<MusicPreviewPage/>}/>
         </Routes>
      </HashRouter>   
       </>
    )
}