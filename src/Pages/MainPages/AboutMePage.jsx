import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import MyFooter from "../EveryPageStuff/MyFooter"
import Container from 'react-bootstrap/Container';
import AboutMeContent from "../ContentComponents/AboutMeContent";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMePage(){
    return (
       <div id='Home'>
        <Container fluid ="md">
        <Row>
            <Col><WebsiteHeader/> </Col>                      
        </Row>

        <Row className="pt-5">
           <AboutMeContent/>
        </Row>
        
        </Container>
        <MyFooter/>
       </div>
    )
}