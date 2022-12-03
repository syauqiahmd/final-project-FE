import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgContoh from '../assets/contoh.jpg'

export default function Introduction(){
	return (
		<div id="introduction" className="mb-5">
			<div className="row mb-5">
				<div className="col-lg-8 col-sm-6 col-12">
					<img src={ImgContoh} />
				</div>
				<div className="col-lg-4 col-sm-6 col-12">
					<div className="d-flex justify-content-between infobox">
						<span>
							Difficult
						</span>
						<span>
							1/5
						</span>
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