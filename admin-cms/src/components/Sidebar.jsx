import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link
          to={"/"}
          >
            Home
          </Link>
          <Link
          to={"/register"}
          >
            Register
          </Link>
        </li>
      </ul>
    </>
  );
}
