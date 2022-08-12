import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header/Header";
import BEM from "./../../assets/images/BEM.png";
import ReactImg from "./../../assets/images/React.png";
import TSImg from "./../../assets/images/typescript.png";
import Footer from "../Footer/Footer";
import RRRImg from './../../assets/images/3Rs.png'
const Presentation = () => {
    return (
        <>
        <div className="presentation">
        <Header />
      </div>
      <Container className="presentation__details">
        <Row>
        <Col md={12} xs={12} className="p-4">
        <img src={RRRImg} alt="alt text" />
            </Col>

        <Col md={6} xs={12} className="p-4">
                <h2>Refactorability</h2>
                <p>
                Code that is refactorable is code that you can change without fear. It's code that you can deploy on a Friday night, and come back to on Monday morning without any concern that your users encountered runtime errors.
                </p>
              </Col>
              <Col md={6} xs={12} className="p-4">
              <img src={BEM} alt="alt text" />
                </Col>
                <Col md={6} xs={12} className="p-4">
                <img src={ReactImg} alt="alt text" />
                </Col>
                <Col md={6} xs={12} className="p-4">
                <h2>
               Reusability
                </h2>
                <p>
                Reusability is the sole reason you are able to read this code, communicate with strangers online, and even program at all. Reusability allows us to express new ideas with little pieces of the past.
                </p>
                </Col>
                <Col md={6} xs={12} className="p-4">
                    <h2>
                    Readability
                    </h2>
                    <p>
                    Readability is the simplest way of assessing code quality and it's the most straightforward to fix. It is the most obvious thing you see right when you open up a piece of code, and it generally consists of:
                    </p>
                </Col>
                    <Col md={6} xs={12} className="p-4">
                <img src={TSImg} alt="alt text" />
                </Col>
              </Row>
              </Container>

              <Footer />
              </>

    )
}

export default Presentation
