import React, { Component } from "react";
import { connect } from "react-redux";


interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div
        style={{
          width: "inherit",
          maxWidth: "inherit",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <div>
          <a href="https://resume.creddle.io/resume/gcvhp338b0x">
            <img style={{maxWidth: "75%"}} alt="The updates resume of Gabriella Rose Morgan. For a screen-reader compatible version, please click through." src="https://res.cloudinary.com/dwa3bztx6/image/upload/v1634158372/Portfolio/Gabriella_Morgan_Resume_2021.png"/>
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(Resume);
