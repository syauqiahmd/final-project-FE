import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
// import {} from '../store/actions/actionCreator'

import Slideshow from "../components/Slideshow";
import TopProject from '../components/TopProject'
import About from "../components/About";

export default function Home(){
	return (
		<>
            <Slideshow />
            <TopProject />
            <About />
        </>
	)
}