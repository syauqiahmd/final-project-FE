import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Step from "../components/Step"

export default function ProjectDetail(){
	return (
		<div id="project-detail">
			<div className="container">
				<div id="title">
					<h2>Project Title</h2>
					<h5>Written By: Anonim</h5>
				</div>
				<Step />
				<Step />

			</div>

		</div>
	)
}