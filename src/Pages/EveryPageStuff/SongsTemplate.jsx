import MusicCards from "./MusicCards"
import "../EveryPageStuff/SongsTemplateStyle.css"
import Container from 'react-bootstrap/Container';
import NavBarMusic from "./NavBarMusic";
import MusicCardCreator from "./MusicCardCreator";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SongsTemplate(){
    document.body.style.overflow='auto';
    return (
       <Container className="">
        <Row className="mb-4 position-relative">
            <Col>
            <Container>
                <NavBarMusic/>               
            </Container>
            </Col>     
        </Row>
       </Container>
    )
}