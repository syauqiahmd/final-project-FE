import { Outlet } from "react-router-dom";
import FooterCustom from "../components/FooterCustom"
import NavbarCustom from "../components/NavbarCustom"

export default function Layout() {
  return(
    <>
      <NavbarCustom/>
        <Outlet />
      <FooterCustom />
    </>
  );
}