import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Col>
        <Row style={{ margin: "2rem 0 0 0" }}>
          <Col xs="12" style={{ overflow: "auto" }}>
            {window.innerWidth > 1000 ? (
              <iframe
                title="Resume"
                src="https://resume.creddle.io/embed/gcvhp338b0x"
                width="850"
                height="1100"
                scrolling="no"
                seamless
              ></iframe>
            ) : (
              <img
                style={{ maxWidth: "100%" }}
                alt="The updates resume of Gabriella Rose Morgan. For a screen-reader compatible version, please click through."
                src="https://res.cloudinary.com/dwa3bztx6/image/upload/v1634158372/Portfolio/Gabriella_Morgan_Resume_2022.png"
              />
            )}
          </Col>
        </Row>
        <Row style={{ marginBottom: "2rem" }}>
          <Col xs="12">
            <a href="https://resume.creddle.io/resume/gcvhp338b0x">
              View/Print PDF
            </a>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default connect()(Resume);
