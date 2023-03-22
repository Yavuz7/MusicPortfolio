import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";

export default function MusicCards() {
    return(
        <>
        <Card style={{width: "23rem", height: "30rem"}}>
            <Card.Title>Name Of Music Track From SoundCloud Here</Card.Title>
            <ReactPlayer width = "300px" height = "300px" url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"/>
            <Card.Body>Song Stuff Here</Card.Body>
            <Card.Footer>Song Description Here</Card.Footer>
        </Card>
        </>
    )
}