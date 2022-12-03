import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Card from "../components/Card"

export default function Project(){
	let dummy = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<>
			<div id="project">
				<div className="container">
					<div className="d-flex justify-content-end mt-4">
						<Link className="btn btn-primary">
							Add Project
						</Link>
					</div>
					<h2 className="text-center mt-1 mb-5">Projects</h2>
					<div className="row">
						{
							dummy.map(() => {
								return (
									<div className="col-lg-3 col-md-6 col-sm-6 col-12">
										<Card />
									</div>
								)
							})
						}
					</div>
					<div className="d-flex justify-content-end mt-4">
						<Link to=''><span className="icon-round"><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></span></Link>
						<Link to=''><span className="icon-round"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span></Link>
					</div>
				</div>
			</div>
		</>
	)
}