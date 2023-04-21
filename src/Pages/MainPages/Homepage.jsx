import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import MyFooter from "../EveryPageStuff/MyFooter"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SongsTemplate from "../EveryPageStuff/SongsTemplate"
import HomePageFeatureSong from "../ContentComponents/HomePageFeaturedSong";

export default function Homepage(){
    return (
       <div id='Home'>
        <Container fluid ="mx-auto">
        <Row>
            <Col><WebsiteHeader/> </Col>                      
        </Row>

        <Row className="pt-5">
            <Col>
            <HomePageFeatureSong/>
            </Col>
        </Row>
        
        <MyFooter/>
        </Container>
       </div>
    )
}