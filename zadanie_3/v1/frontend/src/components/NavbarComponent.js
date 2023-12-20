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
            <LinkContainer to="/dropdown-item-1">
              <NavDropdown.Item>Fiction</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/dropdown-item-2">
              <NavDropdown.Item>Crime</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/dropdown-item-2">
              <NavDropdown.Item>Horror</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/dropdown-item-2">
              <NavDropdown.Item>Classic Literature</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to='/company'>
            <Nav.Link>Company</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about-us">
            <Nav.Link>About us</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/pricing">
            <Nav.Link>Log in</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
