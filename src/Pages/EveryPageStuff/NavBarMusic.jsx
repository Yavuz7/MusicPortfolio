import "../EveryPageStuff/NavBarMusic.css"

import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  NavItem  from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";


export default function NavBarMusic(props){

    return ( 
      <>
       <Container className="my-5 mx-auto navBarMusic border-radius position-relative myNav">           
          <Nav justify className="mx-5 me-auto fs-2 border-radius"> 
          <NavItem>
          <Nav.Link as = {Button} className="nL px-5 text-light" onClick={() => props.categorySetter(0)}>Latest</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as = {Button} className="nL px-5 text-light" onClick={() => props.categorySetter(1)}>Favorites</Nav.Link>
         </NavItem>
         <NavItem>
            <Nav.Link as = {Button} className="nL px-5 text-light" onClick={() => props.categorySetter(2)}>Random</Nav.Link>  
         </NavItem>        
          </Nav>             
        </Container>
        </>
    )
}