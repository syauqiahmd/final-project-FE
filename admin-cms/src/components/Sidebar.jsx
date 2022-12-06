import { Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div>
        <img
          src={require("../assets/logo-dithub-putih.png")}
          className="mt-5 mb-2 w-50"
          alt="logo"
        />
        <p className="text-white mb-5">Admin Dashboard</p>
      </div>
      <Row>
        <ul>
          <li className="mb-4">
            <Link to={"/"} className="sidebar-link">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to={"/register"} className="sidebar-link">
              Register
            </Link>
          </li>
          <li className="mb-4">
            <Link to={"/report"} className="sidebar-link">
              Reports
            </Link>
          </li>
          <li className="mb-4">
            <Button variant="primary" onClick={logout}>
              Logout
            </Button>
          </li>
        </ul>
      </Row>
    </>
  );
}
