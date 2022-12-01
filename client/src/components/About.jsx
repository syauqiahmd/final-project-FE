import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export default function About(){
	return (
		<div id="about" className="">
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<h3>About</h3>
				<p>Lorem ipsum, lorem ipsum. Kamu makan kacang, aku makan lorem ipsum. Lorem ipsum Lorem Ipsum</p>
			</div>

		</div>
	)
}