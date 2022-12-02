import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
// import {} from '../store/actions/actionCreator'

import Card from "./Card"

export default function TopProject(){
	return (
		<div id="topproject">
			<div className="container">
			<div className="row">
				<div className="d-flex flex-column align-items-center title col-lg-12 col-md-6 col-12">
					<h3>Top Project</h3>
					<p>Lorem ipsum, lorem ipsum. Kamu makan kacang, aku makan lorem ipsum. Lorem ipsum Lorem Ipsum</p>
				</div>
				
				<div className="container col-lg-12 col-md-6 col-12">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-lg-4 col-12">
							<Card />
						</div>
						<div className="col-lg-4 col-12">
							<Card />
						</div>
						<div className="col-lg-4 col-12">
							<Card />
						</div>
					</div>

				</div>
			</div>
			</div>
		</div>
	)
}