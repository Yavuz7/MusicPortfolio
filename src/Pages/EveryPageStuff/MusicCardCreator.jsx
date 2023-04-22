import MusicCards from "./MusicCards";
import SongData from "./SongData";

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MusicCardCreator() {
    const sD1 = SongData[0];
    const sD2 = SongData[1];
    const sD3 = SongData[2];
    const sD4 = SongData[3];

  {
    /*Define the components up here, depending on what data is needed inside each component, depending on the nav bar selection*/
  }
  return (
    <>
      <Row className="my-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards className="musicCardDiv" data={sD1}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards data={sD2} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>
      <Row className="mt-3 mb-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="">       
          <MusicCards data={sD3}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="">
          <MusicCards data={sD4} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>
    </>
  );
}
