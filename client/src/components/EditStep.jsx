import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"

export default function EditStep({name, imgUrl, description}){
	const [getDescription, setDescription] = useState([{}])

	const [stepForm, setForm] = useState({
		name,
		imgUrl,
		description
	})

	const addStep = (e) => {
		e.preventDefault()
		setDescription([...getDescription, {}])
	}

	const removeStep = (e) => {
		e.preventDefault()
		let index = e.target.name
		index = Number(index)
		setDescription([
			...getDescription.slice(index + 1),
			...getDescription.slice(0, index)
		])
	}

	return (
		<div className="add-step mb-3">
			<div className="input-form">
				<label>Step Title</label><input type="text" className="form-control" name='name' placeholder="Step Title" value={stepForm.name}/>
			</div>
			<div className="input-form">
				<label>Step Image</label><input type="file" className="form-control" name="imgUrl" />
			</div>
			<div className="input-form2">
				<label>Description</label>
				<div style={{width: '100%'}}>
				{
					stepForm.description?.map((data, index) => {
						return (
							<textarea type="text" className="form-control mb-4" name='description' placeholder="Description" key={index}>{data}</textarea>
						)
					})
				}
				</div>
			</div>
			
				{
					getDescription.length > 1
					?
					<div className="d-flex justify-content-between">
						<button className="btn btn-primary" onClick={removeStep}>Remove Description</button>
						<button className="btn btn-primary" onClick={addStep}>Add Description</button>
					</div>
					:
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary" onClick={addStep}>Add Description</button>
					</div>
				}
				
		</div>
	)
}