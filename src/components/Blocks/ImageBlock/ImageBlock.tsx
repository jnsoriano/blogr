import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {imageBlockText} from './../../../assets/constants'
import ImageSrcRight from './../../../assets/images/illustration-editor-desktop.svg'
import ImageSrcLeft from './../../../assets/images/illustration-laptop-desktop.svg'
type isRight = {
    isRightImage:boolean
}

interface imageBlockText{
  title:string;
  subTitle1:string;
  contentDetails1:string;
  subTitle2:string;
  contentDetails2:string;
}


const ImageBlock = (isRight:isRight) => {
    return (
        <Container fluid>

        <div className={isRight.isRightImage? "right-image-block":"left-image-block"} >
        <h2 className="title">{imageBlockText.title}</h2>
        <div className={isRight.isRightImage? "canted-left":"canted-right"}>
          <Row className={isRight.isRightImage?"":"left-image-block--row"}>
            <Col md={6} xs={12}>
              <div className="block-content">
                <h3>{imageBlockText.subTitle1}</h3>
                <p>
                {imageBlockText.contentDetails1}
                </p>
                <h3>{imageBlockText.subTitle2}</h3>
                <p>
                {imageBlockText.contentDetails2}
                </p>
              </div>
            </Col>
            <Col md={6} xs={12} className={isRight.isRightImage?"right-image-block__mob":""}>
                {isRight.isRightImage ? 
                <img src={ImageSrcRight} alt="Illustration editor" />:
                <img src={ImageSrcLeft} alt="Laptop editor" />
            }
            </Col>
          </Row>
        </div>
      </div>

      </Container>

    );
}

export default ImageBlock
