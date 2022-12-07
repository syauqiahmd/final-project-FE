import React, { useState } from "react";
// import "./login.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../bin/axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/slices/user";
import { Form, Row, Col, Button } from "react-bootstrap"
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const errorHandler = () => {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errMessage}</p>
        </Alert>
      );
    }
  };

  const emailHandler = (e) => {
    setFormLogin({
      email: e.target.value,
      password: formLogin.password,
    });
  };
  const passwordHandler = (e) => {
    setFormLogin({
      email: formLogin.email,
      password: e.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/public/login", formLogin);
      localStorage.setItem("access_token", data.access_token);
      dispatch(fetchUser())
      toast.success("login success");
      navigate('/')
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
    }
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row mt-4">
          <div className="col-md-6 d-flex">
            <img className="login__imagek align-self-center" src="https://www.freevector.com/uploads/vector/preview/28488/Businessman_Happy_Accepting_News.jpg"
              width="100%" alt="" />
          </div>
          <div className="col-md-5 d-flex">
            <div className="align-self-center card w-100">
              <div className="card-body">
                <Form className="rounded p-4 p-sm-3">
                  <Row className="mb-3 text-center">
                    <h1 className="display-6">Login</h1>
                    {errorHandler()}
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        value={formLogin.email}
                        onChange={emailHandler}
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
                      onChange={passwordHandler}
                        placeholder="Enter password"
                      />
                    </Form.Group>
                  </Row>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Button variant="primary" type="submit" onClick={submitLogin}>
                      Login
                    </Button>
                    <Link to="/register" style={{fontSize: '20px'}}>register</Link>
                  </div>
                  
                  <Row className="mb-3 mt-5 text-center">
                  <p className="text-center">
                    develope by. 
                    <br/>
                    <img src={logo} alt="" className="w-50 text-center" srcset="" />
                  </p>
                  <Link to="/">Back to home</Link>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}