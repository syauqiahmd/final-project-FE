import { useState } from "react";
import { Button, Col, Form, Row, Card } from "react-bootstrap";

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
      <Card style={{  width: "50%", padding: "2px"}} className="justify-content-around">
        <Card.Title>Register Admin</Card.Title>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFN">
              <Form.Label className="text-left">Full Name</Form.Label>
              <Form.Control placeholder="Enter Full Name" />
            </Form.Group>

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

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}
