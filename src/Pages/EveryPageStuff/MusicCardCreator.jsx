import MusicCards from "./MusicCards";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MusicCardCreator(props) {

  return (
    <>
      <Row className="my-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards className="musicCardDiv" data={props.data[0]}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="mt-3">
          <MusicCards data={props.data[1]} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>
      <Row className="mt-3 mb-5 float-end position-relative start-0 ">
      <Col className="spacer pe-5"></Col>
        <Col className="">       
          <MusicCards data={props.data[2]}/>
        </Col>
        <Col className="spacer pe-5"></Col>
        <Col className="">
          <MusicCards data={props.data[3]} />
        </Col>
        <Col className="spacer pe-5 col-8"></Col>
        <Col className="spacer pe-5 col-8"></Col>
      </Row>

    </>
  );
}
