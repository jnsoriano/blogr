import React from 'react'
import logo from './../../assets/images/logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="auto"
              height="50"
              className="d-inline-block align-top"
              alt="Blogr logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/presentation">Presentation</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login" className="header__login">
                Login
              </Nav.Link>
              <Button variant="primary">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}

export default Header
