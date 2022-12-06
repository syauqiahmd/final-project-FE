import { Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dithub-putih.png"
import './Sidebar.css'

export default function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <h3 align="center"><img src={logo} className="mb-5 mt-4" alt="" width={100}/></h3>
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li>
            <Link to="/" className="nav-link px-0 mb-2 align-middle">
              <i className="fa fa-home" />{" "}
              <span className="ms-1 d-none d-sm-inline">Home</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link px-0 mb-2 align-middle">
              <i className="fa fa-users" />{" "}
              <span className="ms-1 d-none d-sm-inline">Register</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/report" className="nav-link px-0 mb-2 align-middle">
              <i className="fa fa-list" />{" "}
              <span className="ms-1 d-none d-sm-inline">Reports</span>{" "}
            </Link>
          </li>
          <li>
            <p onClick={logout} className="nav-link px-0 align-middle">
              <i className="fa fa-sign-out" />{" "}
              <span className="ms-1 d-none d-sm-inline">Log Out</span>{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
