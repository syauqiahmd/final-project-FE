import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgLogoWhite from '../assets/logo-putih.png'
import { FontAwesomeIcon } from 'react-fontawesome'

export default function Footer(){
	return (
		<footer id="footer">
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<img src={ImgLogoWhite} />
				<span>+62 896-8710-1195</span>
				<span>Indonesia</span>
				<span><FontAwesomeIcon icon="fa-solid fa-house" /></span>
			</div>
		</footer>
	)
}