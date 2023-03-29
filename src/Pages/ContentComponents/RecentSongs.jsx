import MusicCards from "../EveryPageStuff/MusicCards"
import "../ContentComponents/RecentSongs.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecentSongs(){
    return (
       <Container>
        <Row>
            <Col>
            <MusicCards/> 
            </Col>  
            <Col>
            <MusicCards/> 
            </Col>         
        </Row>
        <Row>
            <Col>
            <MusicCards/> 
            </Col>
            <Col>
            <MusicCards/> 
            </Col>
             
        </Row> 
       </Container>
    )
}