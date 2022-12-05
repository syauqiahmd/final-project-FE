import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormLogin = {
      ...formLogin,
    };
    newFormLogin[field] = value;
    setFormLogin(newFormLogin);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/Users", {
        email: formLogin.email,
        password: formLogin.password,
      });
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
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
              <Form.Control
                name="email"
                type="email"
                value={formLogin.email}
                onChange={changeInputHandler}
                placeholder="Enter email"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={formLogin.password}
                onChange={changeInputHandler}
                placeholder="Enter password"
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={submitLogin}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
