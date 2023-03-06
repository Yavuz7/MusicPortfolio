import Card from "react-bootstrap/Card";

export default function MusicCards() {
    return(
        <>
        <Card style={{width: "23rem", height: "23rem"}}>
            <Card.Title>Name Of Music Track From SoundCloud Here</Card.Title>
            <Card.Body>Song Stuff Here</Card.Body>
            <Card.Footer>Song Description Here</Card.Footer>
        </Card>
        </>
    )
}