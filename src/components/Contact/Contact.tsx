import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header/Header";
import ImageSrc from "./../../assets/images/illustration-laptop-mobile.svg";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <Header />
      </div>
      <Container className="contact__details">
        <Row>
          <Col md={6} xs={12}>
            <h2>Philippines office Navarro Amper & Co. (Main office)</h2>
            <h5>
              In the Philippines, services are exclusively and independently
              provided by Navarro Amper & Co., a duly registered professional
              partnership in the Philippines.
            </h5>
            <p>
              Navarro Amper & Co. (Main office) 19th Floor Six/NEO Building 5th
              Avenue corner 26th Street Bonifacio Global City Taguig 1634 Phone
              number : +63 2 8581 9000 Fax number : +63 2 8869 3676 Client
              Inquiries : PHCM@deloitte.com For universities and talent
              inquiries : phtalent@deloitte.com
            </p>
          </Col>
          <Col md={6} xs={12}>
            <img src={ImageSrc} alt="alt text" />
          </Col>
          <Col md={12} xs={12}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
