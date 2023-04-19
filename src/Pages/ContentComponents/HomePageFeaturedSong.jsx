import Card from "react-bootstrap/Card";
import Container  from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import '../ContentComponents/BaseContentStyleSheet.css'

export default function HomePageFeatureSong(){
    document.body.style.overflow='auto';
    return(
        <>
        <Card className="musicCardDiv ContentContainer" style={{ width: '55vw', height: '54vh'}}>
            <Card.Title className="p-2">Name Of Music Track From SoundCloud Here</Card.Title>
            <Container className="musicPlayer justify-center float px-0 py-2">
            <ReactPlayer width = "100%" height = "15rem" url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"/>
            </Container>
        <Card.Body>Song Stuff Here</Card.Body>
           
        </Card>
        </>
    )
}