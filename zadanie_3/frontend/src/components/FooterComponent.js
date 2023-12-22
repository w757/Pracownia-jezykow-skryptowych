import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function FooterComponent() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <Container fluid className="py-3">
        <Row className="justify-content-between">
          <Col md={4}>
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroupItem action href="/home" className="bg-dark text-white">
                Home
              </ListGroupItem>
              <ListGroupItem
                action
                href="/services"
                className="bg-dark text-white"
              >
                Services
              </ListGroupItem>
              <ListGroupItem
                action
                href="/about"
                className="bg-dark text-white"
              >
                About
              </ListGroupItem>
              <ListGroupItem
                action
                href="/contact"
                className="bg-dark text-white"
              >
                Contact
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              123 Street Name
              <br />
              City, State, 12345
              <br />
              Email: example@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
