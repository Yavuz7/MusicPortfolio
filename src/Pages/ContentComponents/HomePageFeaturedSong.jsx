import Card from "react-bootstrap/Card";
import Container  from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import '../ContentComponents/BaseContentStyleSheet.css'

export default function HomePageFeatureSong(){
    document.body.style.overflow='hidden';
    return(
        <>
        <Card className="mx-auto position-relative musicCardDiv ContentContainer" style={{ width: '55vw', height: '62vmin'}}>
            <Card.Title className="m-4 p-4">Crows In The Rain ft. Rare Antidote</Card.Title>
            <Card.Body className="text-start featuredCardBody p-2"><u>Why is this song featured</u> <br/><br/> This is a collaborative piece between my friend and I, about something creepy I suppose. The mixing took a long time, but it came out well so I'm very proud to feature it!</Card.Body>
            <Container className="musicPlayer featuredPlayer float px-0 py-5">
            <ReactPlayer url="https://soundcloud.com/yaya-banaya/crows-in-the-rain-ft-rare-antidote?in=yaya-banaya"/>
            </Container>
       
           
        </Card>
        </>
    )
}