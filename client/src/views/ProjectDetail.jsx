import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Step from "../components/Step"
import Introduction from '../components/Introduction'
import Comments from "../components/Comments"
import { Helmet } from "react-helmet"

export default function ProjectDetail(){
	return (
		<div id="project-detail">
			<Helmet>
				<title>Project Detail</title>
			</Helmet>
			<div className="container">
				<div id="title">
					<h1>Project Title</h1>
					<h5>Written By: Anonim</h5>
				</div>
				<Introduction />
				<Step />
				<Step />
				<Comments />

			</div>

		</div>
	)
}