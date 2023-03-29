import RecentSongs from "../ContentComponents/RecentSongs"
import NavigationBar from "../EveryPageStuff/NavigationBar"
import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import NavBarMusic from "../EveryPageStuff/NavBarMusic"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homepage(){
    return (
       <div id='Home'>
        <Container fluid ="md">
        <Row>
            <Col><NavigationBar/></Col>
            <Col><WebsiteHeader/> </Col>                      
        </Row>
        <Row className="px-4 my-5 xs={3}">
            <Col><NavBarMusic/></Col>       
        </Row>
        <Row className="pt-5">
            <RecentSongs/>
        </Row>
        </Container>
       </div>
    )
}