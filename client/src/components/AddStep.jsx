import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export default function AddStep(){
	return (
		<div className="add-step mb-3">
			<div className="input-form">
				<label>Step Title</label><input type="text" className="form-control" name='title' placeholder="Step Title"/>
			</div>
			<div className="input-form">
				<label>Step Image</label><input type="text" className="form-control" name='title' placeholder="Image Url"/>
			</div>
			<div className="input-form2">
				<label>Description</label><textarea type="text" className="form-control" name='title' placeholder="Description"></textarea>
			</div>
		</div>
	)
}