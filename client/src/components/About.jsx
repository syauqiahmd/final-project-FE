import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export default function About(){
	return (
		<div id="about" className="">
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<h3>About</h3>
				<p className="text-center col-md-6">DIT-HUB will be an app for users to share their DIY Projects with each other. Projects can be in a form of Guides. User can comment on each Project and also can save their favorite projects from other users and it will be accessible on their individual Favorite tabs.</p>
			</div>

		</div>
	)
}