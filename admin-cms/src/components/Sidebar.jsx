import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
          <img
            src={require("../assets/logo-dithub-putih.png")}
            className="mt-4 w-50 align-self-center"
            alt="logo"
          />
          <ul>
            <li className="mb-2">
              <Link to={"/"} className="sidebar-link">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to={"/register"} className="sidebar-link">
                Register
              </Link>
            </li>
            <li className="mb-2">
              <Link to={"/register"} className="sidebar-link">
                Reports
              </Link>
            </li>
          </ul>
      </div>
    </>
  );
}
