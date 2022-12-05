import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"

export default function NewProject(){
	const [steps, setStep] = useState()
	return (
		<div className="new-project">
			<div className="container">
				<div id="title">
					<h1>New Project</h1>
				</div>
			</div>
		</div>
		
	)
}