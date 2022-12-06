import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImgLogo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { loginStatus, logoutUser } from "../store/slices/user";
import { Button } from "react-bootstrap";

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collpase, setCollapse] = useState("collapse");
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loginStatus());
  }, []);

  const appear = (e) => {
    e.preventDefault();
    if (collpase === "collapse") {
      setCollapse("");
    } else {
      setCollapse("collapse");
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logoutUser());
    navigate("/");
  };

  const changeButton = () => {
    if (isLogin) {
      return (
        <Button variant="primier" className="btn btn-outline-dark" onClick={logoutHandler}>
          Logout
        </Button>
      );
    } else {
      return (
        <NavLink className={"btn btn-outline-dark"} to={"/login"}>
          Login
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-md d-flex justify-content-around align-items-center">
      <span>
        <Link to="/">
          <img src={ImgLogo} />
        </Link>
      </span>

      <a
        onClick={appear}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </a>

      <span
        className={collpase + " border-group navbar-collapse"}
        id="navbarNavAltMarkup">
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/projects" className="nav-item nav-link">
          Project
        </Link>
        <a href="/#about" className="nav-item nav-link">
          About
        </a>
      </span>
      <span
        className={collpase + " navbar-collapse text-center"}
        id="navbarNavAltMarkup">
        <NavLink className={"btn btn-outline-dark"} to={"/register"}>
          Register
        </NavLink>
        {changeButton()}
      </span>
    </nav>
  );
}
