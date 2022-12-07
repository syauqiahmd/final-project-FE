import React, { useState } from "react";
import "./login.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { instance } from "../bin/axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/slices/user";
import { Form, Row, Col, Button } from "react-bootstrap"

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

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
      navigate('/')
    } catch (err) {
      const { message } = err.response.data;
      setErrMessage(message)
      setShow(true)
    }
  };

  const submitReg = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem("access_token");
      await instance.post(
        "/public/register",
        {
          username: formUser.username,
          fullname: formUser.fullname,
          email: formUser.email,
          password: formUser.password,
        },
        {
          headers: {
            access_token,
          },
        }
      );
      //sweetalert atau toasty disini untuk sukses
      navigate("/");
    } catch (err) {
      console.log(err);
      //handle error ambil dari login
    }
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row mt-4">
          <div className="col-md-6 d-md-none d-lg-block d-flex">
            <img className="login__imagek align-self-center" src="https://www.freevector.com/uploads/vector/preview/28488/Businessman_Happy_Accepting_News.jpg"
              width="100%" alt="" />
          </div>
          <div className="col-md-5 d-flex">
            <div className="align-self-center card w-100">
              <div className="card-body">
                <Form className="rounded p-4 p-sm-3">
                  <Row className="mb-3 text-center">
                    <h1 className="display-6">Register</h1>
                    {errorHandler()}
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



                  <Button variant="primary" className="mt-3" type="submit" onClick={submitReg}>
                    Register
                  </Button>
                  <Row className="mb-3 mt-5 text-center">
                  <p className="text-center">
                    develope by. 
                    <br/>
                    <img src={logo} alt="" className="w-50 text-center" srcset="" />
                  </p>
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