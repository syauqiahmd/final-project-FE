import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"

export default function AddStep(){
	const [description, setDescription] = useState([{}])

	const addStep = (e) => {
		e.preventDefault()
		setDescription([...description, {}])
	}

	const removeStep = (e) => {
		e.preventDefault()
		let index = e.target.name
		index = Number(index)
		setDescription([
			...description.slice(index + 1),
			...description.slice(0, index)
		])
	}

	return (
		<div className="add-step mb-3">
			<div className="input-form">
				<label>Step Title</label><input type="text" className="form-control" name='name' placeholder="Step Title"/>
			</div>
			<div className="input-form">
				<label>Step Image</label><input type="file" className="form-control" name="imgUrl" />
			</div>
			<div className="input-form2">
				<label>Description</label>
				<div style={{width: '100%'}}>
				{
					description.map((data, index) => {
						return (
							<textarea type="text" className="form-control mb-4" name='description' placeholder="Description"></textarea>
						)
					})
				}
				</div>
			</div>
			
				{
					description.length > 1
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