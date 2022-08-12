import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImageSrc from "../../../assets/images/illustration-phones.svg";
import {contentBlockText} from './../../../assets/constants'

interface contentBlockText{
  title:string;
  subTitle:string;
}

const ContentBlock = () => {

  return (
    <Container fluid className="contentblock">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <img src={ImageSrc} alt="alt text" />
          </Col>
          <Col md={6} xs={12}>
            <div className="block-content">
              <h1 className="title">{contentBlockText.title}</h1>
              <p className="sub-title">
                {contentBlockText.subTitle}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContentBlock;
