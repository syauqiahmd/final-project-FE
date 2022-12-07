import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { Helmet } from "react-helmet"
import AddStep from "../components/AddStep"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NewProject(){
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
	return (
		<div id="new-project">
			<Helmet>
				<title>New Project | DIT-HUB</title>
			</Helmet>
			<div className="container">
				<div id="title">
					<h1>New Project</h1>
				</div>
				<div className="mb-5 form">
					<div className="input-form">
						<label>Project Name</label><input type="text" className="form-control" name='title' placeholder="Project Name"/>
					</div>
					<div className="input-form">
						<label>Difficulty</label>
						<select className="form-control" name='difficulty'>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="input-form">
						<label>Introduction</label><textarea type="text" className="form-control" name='introduction' placeholder="Introduction"></textarea>
					</div>
					<div className="input-form">
						<label>Main Image</label><input type="file" className="form-control" name="imgUrl" />
						{/* <input type="text" className="form-control" name='imgUrl' placeholder="Image Url"/> */}
					</div>
					<div className="input-form2">
						<label>Step Detail</label>
						<div style={{width: '100%'}}>
						{
							steps.map((data, index) => {
								return (
									<div key={index} className="mb-4">
										<AddStep key={index} />
										{
											steps.length > 1
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