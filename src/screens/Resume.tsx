import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Document, Page, pdfjs } from "react-pdf";
import * as pdfFile from "../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
          <img src="https://res.cloudinary.com/dwa3bztx6/image/upload/v1634158372/Portfolio/Gabriella_Morgan_Resume_2021.png"/>
        </div>
      </div>
    );
  }
}

export default connect()(Resume);
