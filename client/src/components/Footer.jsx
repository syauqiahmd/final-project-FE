import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgLogoWhite from '../assets/logo-putih.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
	return (
		<footer id="footer">
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<img src={ImgLogoWhite} className="mb-4" />
				<span>+62 xxx-xxxx-xxxx</span>
				<span className="mb-4">Indonesia</span>
				<span className="icon-groups d-flex justify-content-between">
					<FontAwesomeIcon icon="fa-brands fa-facebook" />
					<FontAwesomeIcon icon="fa-brands fa-twitter" />
					<FontAwesomeIcon icon="fa-brands fa-github" />
					<FontAwesomeIcon icon="fa-brands fa-linkedin" />
				</span>
			</div>
			<div className="allrights">
				<div className="d-flex justify-content-center">
					<h6>
						2022 All rights Reserved
					</h6>
				</div>
			</div>
		</footer>
	)
}