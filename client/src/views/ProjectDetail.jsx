import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Step from "../components/Step"
import Introduction from '../components/Introduction'
import Comments from "../components/Comments"
import { Helmet } from "react-helmet"
import { fetchProjectById } from "../store/slices/project";
import { useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function ProjectDetail(){
	const {id} = useParams()
	const { project, loadingProject } = useSelector((state) => {
		return state.project;
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjectById({ id: id }));
		console.log(project);

	}, [dispatch, project.id]);

	return (
		<div id="project-detail">
			<Helmet>
				<title>{project.title}</title>
			</Helmet>
			<div className="container">
				<div id="title">
					<h1>{project.title}</h1>
					<h5>Written By: Anonim</h5>
				</div>
				<Introduction difficulty={project.difficulty} introduction={project.introduction} imgUrl={project.imgUrl} />
				<Step />
				<Step />
				<Comments id={id}/>

			</div>
		</div>
	)
}