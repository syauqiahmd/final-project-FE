import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
// import {} from '../store/actions/actionCreator'

import ImgContoh from '../assets/contoh.jpg'

export default function Slideshow(){
	return (
		<div id="slideshow">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-12 left">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p>Lorem ipsum, lorem ipsum. Kamu makan kacang, aku makan lorem ipsum. Lorem ipsum Lorem Ipsum</p>
						<Link to='/projects' className="btn btn-lg btn-primary">Browse</Link>
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