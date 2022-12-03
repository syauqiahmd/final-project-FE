import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <img
        src={require("../assets/logo-dithub-putih.png")}
        className="logo-dithub"
        alt="logo"
      />
      <ul>
        <li>
          <Link to={"/"} className="sidebar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/register"} className="sidebar-link">
            Register
          </Link>
        </li>
        <li>
          <Link to={"/register"} className="sidebar-link">
            Reports
          </Link>
        </li>
      </ul>
    </>
  );
}
