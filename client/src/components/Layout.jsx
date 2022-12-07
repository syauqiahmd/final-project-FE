import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/slices/user";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.access_token) {
      dispatch(fetchUser(localStorage.access_token));
    }
  }, []);
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
