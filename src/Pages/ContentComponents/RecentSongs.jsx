import MusicCards from "../EveryPageStuff/MusicCards"
import "../ContentComponents/RecentSongs.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecentSongs(){
    document.body.style.overflow='auto';
    return (
       <Container className="">
        <Row className="my-5 float-end position-relative start-0 ">       
            <Col className="mt-3">
                <MusicCards/> 
            </Col>  
            <Col className="mt-3">
                <MusicCards/> 
            </Col>   
            <Col className="spacer pe-5 col-8"></Col>
            <Col className="spacer pe-5 col-8"></Col>        
        </Row>
        <Row className="mt-3 mb-5 float-end position-relative start-0 ">       
            <Col className="">
                <MusicCards/> 
            </Col>  
            <Col className="">
                <MusicCards/> 
            </Col>   
            <Col className="spacer pe-5 col-8"></Col>
            <Col className="spacer pe-5 col-8"></Col>        
        </Row>
       </Container>
    )
}