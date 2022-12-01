import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
