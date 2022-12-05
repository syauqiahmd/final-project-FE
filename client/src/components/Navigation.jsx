import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgLogo from '../assets/logo.png';
import { useState } from "react";
// import {} from '../store/actions/actionCreator'

export default function Navigation(){
	const [collpase, setCollapse] = useState('collapse')

	const appear = (e) => {
		e.preventDefault()
		if(collpase === 'collapse'){
			setCollapse('')
		} else {
			setCollapse('collapse')
		}
	}
	return (
		<nav className="navbar navbar-expand-md d-flex justify-content-around align-items-center">
			<span>
			<Link to="/"><img src={ImgLogo} /></Link>
			</span>

			<a onClick={appear} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</a>
			
			<span className={collpase + " border-group navbar-collapse"} id="navbarNavAltMarkup">
				<Link to="/" className="nav-item nav-link">Home</Link>
				<Link to="/projects" className="nav-item nav-link">Project</Link>
				<a href="/#about" className="nav-item nav-link">About</a>
			</span>
			<span className={collpase + " navbar-collapse text-center"} id="navbarNavAltMarkup">
				<a className="btn btn-outline-dark">Register</a>
				<a className="btn btn-outline-dark">Login</a>
			</span>
		</nav>
	)
}