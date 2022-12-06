import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Step from "../components/Step"
import Introduction from '../components/Introduction'
import Comments from "../components/Comments"
import { Helmet } from "react-helmet"
import { fetchProjectById } from "../store/slices/project";
import { fetchSteps } from "../store/slices/step";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function ProjectDetail(){
	const {id} = useParams()
	const [dataProject, setDataProject] = useState({})
	const { project, loadingProject } = useSelector((state) => {
		return state.project;
	});
	// const { steps, loadingSteps } = useSelector((state) => {
	// 	return state.step;
	// });
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjectById({ id: id }));
		// dispatch(fetchSteps({ projectid: id }));
	}, [dispatch, id]);


	return (
		<div id="project-detail">
			<Helmet>
				<title>{project.title}</title>
			</Helmet>
			<div className="container">
				<div id="title">
					<h1>{project.title}</h1>
					<h5>Written By: {project.User?.username}</h5>
				</div>
				<Introduction difficulty={project.difficulty} introduction={project.introduction} imgUrl={project.imgUrl} totalStep={project.Steps?.length} />
				{
					project.Steps?.map((data, index) => {
						return (
							<Step key={index} index={index+1} name={data.name} imgUrl={data.imgUrl} description={data.description} />
						)
					})
				}
				{/* <Step />
				<Step /> */}
				<Comments id={id}/>

			</div>
		</div>
	)
}