import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
