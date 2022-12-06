import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './login.scss';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postLogin } from "../store/slices/user";

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
      localStorage.setItem('access_token', data.access_token)
    }
  }

  return (
    <div className='row text-center'>
      <main className="col-md-4 col-10 form-signin w-50s m-auto mt-5">
        <form onSubmit={submitLogin}>
          <Link to="/"><img className="mb-4" src={logo} height="35" /></Link>
          <Link to="/"><h6 className='mb-4'>Back to Home</h6></Link>
          <h3 className="h3 mb-3 fw-normal">Please sign in</h3>
          <div className="form-floating">
            <input type="email" className="form-control" 
            name='email' 
            id="floatingInput"
            placeholder="name@example.com" 
            value={formLogin.email}
            onChange={emailHandler}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input type="password" 
            className="form-control" 
            name='password' 
            id="floatingPassword" 
            placeholder="Password" 
            value={formLogin.password}
            onChange={passwordHandler}
            />
            <label>Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
