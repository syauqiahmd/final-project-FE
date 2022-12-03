import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgCard from '../assets/card.jpeg'

export default function Card(){
	return (
		<div className="card mb-4">
			<Link to="/project/1"><img className="card-img-top" src={ImgCard} alt="Card image cap" /></Link>
			<div className="card-body">
				<h4 className="card-title">Card title</h4>
				<span>Category Name</span><br />
				<span>User Name</span>
				<div className="text-center">
					<Link to="/project/1" className="btn btn-light">See More</Link>
				</div>
			</div>
		</div>
	)
}