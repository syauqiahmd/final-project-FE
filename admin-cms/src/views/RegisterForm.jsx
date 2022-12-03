import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Register() {
  const [formUser, setFormUser] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormUser = {
      ...formUser,
    };
    newFormUser[field] = value;
    setFormUser(newFormUser);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Form className="rounded p-4 p-sm-3">
        <Row className="mb-3">
          <h1 className="display-6">Register</h1>
        </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFN">
              <Form.Label className="text-start">Full Name</Form.Label>
              <Form.Control placeholder="Enter Full Name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUN">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter Username" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
