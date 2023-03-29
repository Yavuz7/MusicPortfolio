import "../EveryPageStuff/NavBarMusic.css"
import Nav from 'react-bootstrap/Nav';
import  Container  from "react-bootstrap/Container";


export default function NavBarMusic(){
    return (
      <Container fluid className="musicBar w-50">
          <Nav defaultActiveKey="#Recent" justify className=" me-auto fs-2 border-radius w-100 " variant="pills">     
            <Nav.Link href="#Recent" className="text-light">Recent</Nav.Link>
            <Nav.Link href="#Popular" className="text-light">Popular</Nav.Link>
            <Nav.Link href="#Favorites" className="text-light">Favorites</Nav.Link>
            <div className="navBg" style={{height:"100%"}}></div>
          </Nav>
          
      </Container>
    )
}