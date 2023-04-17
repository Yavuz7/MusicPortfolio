import Card from "react-bootstrap/Card";
import Container  from "react-bootstrap/Container";
import ReactPlayer from "react-player";

export default function MusicCards() {
    return(
        <>
        <Card className="musicCardDiv" style={{width: "25rem", height: "30rem"}}>
            <Card.Title className="p-2">Name Of Music Track From SoundCloud Here</Card.Title>
            <Container className="musicPlayer justify-center float-start px-0 py-2">
            <ReactPlayer width = "100%" height = "15rem" url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"/>
            </Container>
            <Card.Body>Song Stuff Here</Card.Body>
           
        </Card>
        </>
    )
}