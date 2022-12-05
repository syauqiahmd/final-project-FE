import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
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

  const submitReg = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/Users", {
        username: formUser.username,
        fullname: formUser.fullname,
        email: formUser.email,
        password: formUser.password,
      });
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
              <Form.Control
                placeholder="Enter Full Name"
                name="fullname"
                type="text"
                value={formUser.fullname}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUN">
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="Enter Username"
                name="username"
                type="text"
                value={formUser.username}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter email"
                name="email"
                type="email"
                value={formUser.email}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter password"
                name="password"
                type="password"
                value={formUser.password}
                onChange={changeInputHandler}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={submitReg}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
