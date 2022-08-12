import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col md={3} xs={6}>
            <div className="footer__logo">
              <img
                src={logo}
                width="auto"
                height="50"
                className="d-inline-block align-top"
                alt="Blogr logo"
              />
              <p>
              A free and open source application backed by a large community of helpful developers. 
              </p>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#Overview">Overview</Link>
              </li>
              <li>
                <Link to="#Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="#Marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="#Features">Features</Link>
              </li>
              <li>
                <Link to="#Integrations">Integrations</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={6}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#About">About</Link>
              </li>
              <li>
                <Link to="#Team">Team</Link>
              </li>
              <li>
                <Link to="#Blog">Blog</Link>
              </li>
              <li>
                <Link to="#Careers">Careers</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={6}>
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#Contact">Contact</Link>
              </li>
              <li>
                <Link to="#Newsletter">Newsletter</Link>
              </li>
              <li>
                <Link to="#LinkedIn">LinkedIn</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
