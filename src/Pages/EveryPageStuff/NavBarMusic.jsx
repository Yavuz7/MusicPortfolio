import "../EveryPageStuff/NavBarMusic.css"

import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  NavItem  from "react-bootstrap/NavItem";

export default function NavBarMusic(){
    return ( 
       <Container className="navBarMusic border-radius position-relative myNav">           
          <Nav justify className="mx-auto me-auto fs-2 border-radius"> 
          <NavItem>
            <Nav.Link className="px-5 text-light">Latest</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link className="px-5 text-light">Favorites</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link className="px-5 text-light">Random</Nav.Link>  
         </NavItem>        
          </Nav>             
        </Container>
    )
}