import "../EveryPageStuff/NavBarMusic.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarMusic(){
    return (
       <> 
    <Navbar expand="lg" fixed = "left" className="border-radius mainNav">         
          <Nav defaultActiveKey="#Recent" justify className=" me-auto fs-2 border-radius w-100 " variant="pills">     
            <Nav.Link href="#Recent" className="text-light">Recent</Nav.Link>
            <Nav.Link href="#Popular" className="text-light">Popular</Nav.Link>
            <Nav.Link href="#Favorites" className="text-light">Favorites</Nav.Link>
            <div className="navBg"></div>
          </Nav>
    </Navbar>
       </>
    )
}