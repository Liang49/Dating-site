import React from "react";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br />

            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <div className="Login"></div>
      </div>
    );
  }
}

export default Login;
