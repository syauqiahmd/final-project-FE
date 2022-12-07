import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { instance } from "../bin/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      const access_token = localStorage.getItem("access_token");
      await instance.post(
        "/admin/register",
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
      // console.log("User admin created!");
      toast.success("User admin has been created!")
      //sweetalert atau toasty disini untuk sukses

      navigate("/");
    } catch (err) {
      // console.log(err);
      toast.error(err.message)
      //handle error ambil dari login
      
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
