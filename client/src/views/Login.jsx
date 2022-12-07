import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './login.scss';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postLogin } from "../store/slices/user";
import { Form, Row, Col, Button } from 'react-bootstrap';

const Login = () => {
  const { user, loadingUser } = useSelector((state) => {
		return state.user;
	});
	const dispatch = useDispatch();
  // useEffect(() => {
	// 	dispatch(postUser({ projectid: id }));
	// }, []);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  const emailHandler = (e) => {
    setFormLogin({
      email: e.target.value,
      password: formLogin.password
    })
  }
  const passwordHandler = (e) => {
    setFormLogin({
      email: formLogin.email,
      password: e.target.value
    })
  }

  const submitLogin = (e) => {
    e.preventDefault()
    // console.log(formLogin)
    dispatch(postLogin({ form: formLogin }))
    console.log(user);
    // console.log(getdata);
    if(loadingUser){
      // localStorage.setItem('access_token', data.access_token)
    }
  }

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

export default Login;
