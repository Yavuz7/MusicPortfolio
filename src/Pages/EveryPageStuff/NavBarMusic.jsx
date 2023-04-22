import "../EveryPageStuff/NavBarMusic.css"

import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  NavItem  from "react-bootstrap/NavItem";
import MusicCardCreator from "./MusicCardCreator";
import SongData from "./SongData";

import { useState } from "react";

export default function NavBarMusic(){
   const[category,setCategory] = useState(0);
    return ( 
      <>
       <Container className="my-5 mx-auto navBarMusic border-radius position-relative myNav">           
          <Nav justify className="mx-5 me-auto fs-2 border-radius"> 
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
        <MusicCardCreator category={category} data={SongData}/>
        </>
    )
}