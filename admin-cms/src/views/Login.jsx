import { useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
import { instance } from "../bin/axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-dithub.png"

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
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
      const { data } = await instance.post("/admin/login", {
        email: formLogin.email,
        password: formLogin.password,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err);
      setShow(true);
      //handle error setState error
      //kalo bisa toasty bagus
      setError(err.message)
    }
  };

  const showAlert = () => {
    if (show) {
      return (
        //width di atur, ini handle error
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      );
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
                  <Row>{showAlert()}</Row>
                  <Row className="mb-3 text-center">
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
