import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import EditStep from "../components/EditStep"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fetchProjectById } from "../store/slices/project";

export default function EditProject(){
	const {id} = useParams()
	const [dataProject, setDataProject] = useState({})
	
	const { project, loadingProject } = useSelector((state) => {
		return state.project;
	});
	// const { steps, loadingSteps } = useSelector((state) => {
	// 	return state.step;
	// });
	const dispatch = useDispatch();

	const [formEdit, setFormEdit] = useState({
		title: '',
		difficulty: '',
		introduction: ''
	})

	useEffect(() => {
		dispatch(fetchProjectById({ id: id }));
		console.log(project);
		setFormEdit({
			title: project?.title,
			difficulty: project?.difficulty,
			introduction: project?.introduction
		})
		// console.log(project);
		// dispatch(fetchSteps({ projectid: id }));
	}, [project?.id]);

	

	const [steps, setStep] = useState([{}])

	const addStep = (e) => {
		e.preventDefault()
		setStep([...steps, {}])
	}

	const removeStep = (e) => {
		e.preventDefault()
		let index = e.target.name
		index = Number(index)
		setStep([
			...steps.slice(index + 1),
			...steps.slice(0, index)
			// ...steps.slice(index + 1)
		  ])
	}

	console.log(project);
	return (
		<div id="new-project">
			<Helmet>
				<title>Edit Project | DIT-HUB</title>
			</Helmet>
			<div className="container">
				
				<div id="title">
					<h1>{project.title}</h1>
				</div>
				<div className="mb-5 form">
					<div className="input-form">
						<label>Project Name</label><input type="text" className="form-control" name='title' placeholder="Project Name" value={formEdit.title}
						onChange={(e) => {
							e.preventDefault()
							setFormEdit({
								...formEdit,
								title: e.target.value
							})
						}}
						/>
					</div>
					<div className="input-form">
						<label>Difficulty</label>
						<select className="form-control" name='difficulty' value={formEdit.difficulty}
						onChange={(e) => {
							e.preventDefault()
							setFormEdit({
								...formEdit,
								difficulty: e.target.value
							})
						}}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="input-form">
						<label>Introduction</label><textarea type="text" className="form-control" name='introduction' placeholder="Introduction" value={formEdit.introduction}
						onChange={(e) => {
							e.preventDefault()
							setFormEdit({
								...formEdit,
								introduction: e.target.value
							})
						}}
						
						></textarea>
					</div>
					<div className="input-form">
						<label>Main Image</label><input type="file" className="form-control" name="imgUrl" />
						{/* <input type="text" className="form-control" name='imgUrl' placeholder="Image Url"/> */}
					</div>
					<div className="input-form2">
						<label>Step Detail</label>
						<div style={{width: '100%'}}>
						{
							project.Steps?.map((data, index) => {
								return (
									<div key={index} className="mb-4">
										<EditStep name={data.name} description={data.description} imgUrl={data.imgUrl} />
										{
											project.Steps?.length > 1
											? <button className="btn btn-danger" name={index}
												onClick={
													() => {
														setStep(steps.filter((_, i) => i !== index));
													}
												}
												><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
											: null
										}
									</div>
								)
							})
						}
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary" onClick={addStep}>Add More</button>
					</div>
				</div>
			</div>
		</div>
		
	)
}