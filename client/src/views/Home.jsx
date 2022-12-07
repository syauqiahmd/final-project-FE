import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

import Slideshow from "../components/Slideshow";
import TopProject from "../components/TopProject";
import About from "../components/About";
export default function Home(){

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
