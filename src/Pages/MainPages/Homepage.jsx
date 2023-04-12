import NavigationBar from "../EveryPageStuff/NavigationBar"
import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import NavBarMusic from "../EveryPageStuff/NavBarMusic"
import MyFooter from "../EveryPageStuff/MyFooter"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SongsTemplate from "../EveryPageStuff/SongsTemplate"

export default function Homepage(){
    return (
       <div id='Home'>
        <Container fluid ="md">
        <Row>
            <Col><WebsiteHeader/> </Col>                      
        </Row>

        <Row className="px-4 my-5 xs={3}">
            <Col></Col>       
        </Row>

        <Row className="pt-5">
            <SongsTemplate/>
        </Row>

        </Container>
        <MyFooter/>
       </div>
    )
}