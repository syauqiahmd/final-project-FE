import React, { useState } from "react";
import "./login.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { instance } from "../bin/axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/slices/user";

function Login() {
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
      navigate('/')
    } catch (err) {
      const { message } = err.response.data;
      setErrMessage(message)
      setShow(true)
    }
  };

  return (
    <div className="row text-center">
      <main className="col-md-4 form-signin w-50s m-auto mt-5">
        <form onSubmit={submitLogin}>
          <img className="mb-4" src={logo} height="35" alt="logo" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {errorHandler()}
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              name="email"
              id="floatingInput"
              placeholder="name@example.com"
              value={formLogin.email}
              onChange={emailHandler}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              value={formLogin.password}
              onChange={passwordHandler}
            />
            <label>Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
