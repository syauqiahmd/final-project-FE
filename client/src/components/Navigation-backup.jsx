import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgLogo from '../assets/logo.png';
// import {} from '../store/actions/actionCreator'

export default function Navigation(){
	return (
		<nav className="d-flex justify-content-around align-items-center">
			<span>
				<img src={ImgLogo} />
			</span>
			<span>
				<a>Home</a>
				<a>Project</a>
				<a>About</a>
			</span>
			<span>
				<a className="btn btn-outline-dark">Register</a>
				<a className="btn btn-outline-dark">Login</a>
			</span>
		</nav>
	)
}