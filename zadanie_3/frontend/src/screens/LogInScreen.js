import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login attempt:", username, password);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-login">
          Login
        </Button>
        <h2> </h2>
      </Form>
    </Container>
  );
};

export default LoginPage;
