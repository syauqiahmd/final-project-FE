import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Row>
          <img
            src={require("../assets/logo-dithub.png")}
            className="mt-4 w-25 align-self-center"
            alt="logo"
          />
        </Row>
        <Form className="rounded p-4 p-sm-3">
          <Row className="mb-3">
            <h1 className="display-6">Login</h1>
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
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}