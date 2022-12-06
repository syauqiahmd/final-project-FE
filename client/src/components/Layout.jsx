import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/slices/user";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("sebelum if", localStorage.access_token);
    if (localStorage.access_token) {
      console.log("test masuk");
      dispatch(fetchUser());
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
