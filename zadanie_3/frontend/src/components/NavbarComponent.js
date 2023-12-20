// NavbarComponent.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="left">
      <LinkContainer to="/">
      <Navbar.Brand>BookNook</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <NavDropdown title="Genres" id="basic-nav-dropdown">
            <LinkContainer to="/category/Poetry">
              <NavDropdown.Item>Poetry</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Drama">
              <NavDropdown.Item>Drama</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Fiction">
              <NavDropdown.Item>Fiction</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Crime">
              <NavDropdown.Item>Crime</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>


          <LinkContainer to="/about-us">
            <Nav.Link>About us</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/log-in">
            <Nav.Link>Log in</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
