import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import ContactPageContent from "../ContentComponents/ContactPageContent";
import MyFooter from "../EveryPageStuff/MyFooter"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactPage(){
    return (
       <div id='Home'>
        <Container fluid ="md">
        <Row>
            <Col><WebsiteHeader/> </Col>                      
        </Row>

        <Row className="pt-5">
           <ContactPageContent/>
        </Row>
        
        </Container>
        <MyFooter/>
       </div>
    )
}