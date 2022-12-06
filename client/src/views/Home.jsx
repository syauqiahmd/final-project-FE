import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

import Slideshow from "../components/Slideshow";
import TopProject from "../components/TopProject";
import About from "../components/About";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStatus } from "../store/slices/user";

export default function Home(){
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginStatus())
  }, []);
	return (
		<>
        <Helmet>
          <title>DIT-HUB | Do It Together</title>
        </Helmet>
        <Slideshow />
        <TopProject />
        <About />
    </>
	)
}
