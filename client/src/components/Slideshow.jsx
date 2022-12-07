import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
// import {} from '../store/actions/actionCreator'

import ImgContoh from '../assets/banner.png'

export default function Slideshow(){
	return (
		<div id="slideshow">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-12 left">
						<h1>Welcome to <code>DITHUB</code></h1>
						<p>Our interest  primarily in platforms that help people share their life hack or DIY Project</p>
						<Link to='/projects' className="btn btn-lg btn-primary">Browse Projects</Link>
					</div>
					<div className="col-lg-7 col-md-6 col-12 right">
						<div>
							<img src={ImgContoh} style={{maxWidth: "100%"}}  />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}