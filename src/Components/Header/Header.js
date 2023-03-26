import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
const Header = () => {
  return (
    <div className="nav-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="me-3 " href="#home">Sheikh Shithil</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white me-3 links">Publications</Nav.Link>
            <Nav.Link href="#features" className="text-white me-3 links">Featured Works</Nav.Link>
            <Nav.Link href="#pricing" className="text-white me-3 links">Projects</Nav.Link>
            <Nav.Link href="#pricing" className="text-white me-3 links">News</Nav.Link>
            <Nav.Link href="#pricing" className="text-white me-3 links">Curriculum vitae</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
