import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        <div className="col-auto col-md-9 col-xl-10 px-5">
          <div className="container mt-5">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
