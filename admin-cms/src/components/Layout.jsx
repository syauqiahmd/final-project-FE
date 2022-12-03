import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto min-vh-100 w-25 sidebar">
            <Sidebar />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
