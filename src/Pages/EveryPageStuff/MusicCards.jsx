import Card from "react-bootstrap/Card";
import Container  from "react-bootstrap/Container";
import ReactPlayer from "react-player";

export default function MusicCards(props) {
    return(
        <Card className="musicCardDiv" style={{width: "28rem", height: "35rem"}}>
            <Card.Title className="p-2">{props.data["name"]}</Card.Title>
            <Container className="musicPlayer justify-center float-start px-0 py-2">
            <ReactPlayer width = "100%" height = "17rem" url={props.data["link"]}/>
            </Container>
            <Card.Body className="text-start" style={{overflowY:"scroll", overflow:"auto"}}>{props.data["description"]}</Card.Body>
           
        </Card>  
    )
}