import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImgLogo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { fetchUser } from "../store/slices/user";

export default function Navigation() {
  const dispatch = useDispatch();
  const { user, loadingUser } = useSelector((state) => {
    return state.user;
  });
  const [collpase, setCollapse] = useState("collapse");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(localStorage.access_token));
  }, []);

  const appear = (e) => {
    e.preventDefault();
    if (collpase === "collapse") {
      setCollapse("");
    } else {
      setCollapse("collapse");
    }
  };
  return (
    <nav className="navbar navbar-expand-md d-flex justify-content-around align-items-center fixed-top">
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
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </a>

      <span
        className={collpase + " border-group navbar-collapse"}
        id="navbarNavAltMarkup"
      >
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/projects" className="nav-item nav-link">
          Project
        </Link>
        {localStorage.getItem("access_token") !== null ? (
          <>
            <Link to="/favorite-project" className="nav-item nav-link">
              My Favorites
            </Link>
            <Link to="/new-project" className="nav-item nav-link">
              New Project
            </Link>
          </>
        ) : null}

        <Link to="/#about" className="nav-item nav-link">
          About
        </Link>
      </span>
      <span
        className={collpase + " navbar-collapse text-center"}
        id="navbarNavAltMarkup"
      >
        {localStorage.getItem("access_token") === null ? (
          <>
            <Link to="/register" className="btn btn-outline-dark">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline-dark">
              Login
            </Link>
          </>
        ) : (
          <>
            Hi {user.username}
            <Link
              onClick={() => {
                navigate("/");
                localStorage.removeItem("access_token");
              }}
              className="btn btn-outline-danger"
            >
              Logout
            </Link>
          </>
        )}
      </span>
    </nav>
  );
}
