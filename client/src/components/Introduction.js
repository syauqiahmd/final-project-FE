import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgContoh from '../assets/contoh.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Introduction(){
	return (
		<div id="introduction" className="mb-5">
			<div className="row mb-5">
				<div className="col-lg-8 col-sm-6 col-12 mb-4">
					<img src={ImgContoh} />
				</div>
				<div className="col-lg-4 col-sm-6 col-12 mb-5">
					<div className="d-flex justify-content-between infobox mb-3">
						<span>Difficult</span>
						<span>1/5</span>
					</div>
					<div className="d-flex justify-content-between infobox mb-3">
						<span>Total Step</span>
						<span>#2</span>
					</div>
					<div className="d-flex justify-content-between infobox mb-3">
						<span>Comment</span>
						<span>20</span>
					</div>
					<div className="mb-3 container">
						<div className="row d-flex justify-content-around">
							<a className="btn btn-primary col-5"><FontAwesomeIcon icon="fa-solid fa-star" /> Favorites</a>
							<a className="btn btn-primary col-5"><FontAwesomeIcon icon="fa-solid fa-exclamation" /> Report</a>
						</div>
						
					</div>
				</div>
			</div>
			<div>
				<h3>Introduction</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit semper cursus. Donec eu nisl facilisis, rutrum eros porttitor, iaculis risus.</p>
			</div>
		</div>
	)
}