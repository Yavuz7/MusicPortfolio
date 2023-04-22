import MusicCards from "./MusicCards";
import SongData from "./SongData";
import NavBarMusic from "./NavBarMusic";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";



export default function MusicCardCreator(props) {
  const [category, changeCategory] = useState(0);
  let songs = [];
  console.log(category);
  if(category === 0){
    songs[0] = SongData[0];
    songs[1] = SongData[1];
    songs[2] = SongData[2];
    songs[3] = SongData[3];
  }
  if(category === 1){
    songs[0] = SongData[8];
    songs[1] = SongData[7];
    songs[2] = SongData[0];
    songs[3] = SongData[5];
  }
  if(category === 2){
    songs[0] = SongData[6];
    songs[1] = SongData[4];
    songs[2] = SongData[3];
    songs[3] = SongData[8];
  }
  return (
    <>
      <NavBarMusic categorySetter = {changeCategory}/>
      <Row className="my-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards className="musicCardDiv" data={songs[0]}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards data={songs[1]} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>
      <Row className="mt-3 mb-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="">       
          <MusicCards data={songs[2]}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="">
          <MusicCards data={songs[3]} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>

    </>
  );
}
