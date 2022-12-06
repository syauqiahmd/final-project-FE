import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgLogo from '../assets/logo.png';
import { useState, useEffect } from "react";
import { fetchUser } from "../store/slices/user";

export default function Navigation(){
	const dispatch = useDispatch()
	const { user, loadingUser } = useSelector((state) => {
		return state.user;
	});
	const [collpase, setCollapse] = useState('collapse')
	const navigate = useNavigate()

	const access_token = localStorage.getItem('access_token')

	useEffect(() => {
		// console.log(access_token);
		dispatch(fetchUser({access_token}));

	}, [access_token]);

	// console.log(user, '<---data user');

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
				{
					localStorage.getItem('access_token') === null
					?
					<>
					<Link to="/" className="btn btn-outline-dark">Register</Link>
					<Link to="/login" className="btn btn-outline-dark">Login</Link>
					</>
					:
					<>
					Hi {user.username}
					<Link onClick={() => {
						localStorage.removeItem('access_token')
						navigate("/");
					}} className="btn btn-outline-dark">Logout</Link>
					</>
				}

			</span>
		</nav>
	)
}