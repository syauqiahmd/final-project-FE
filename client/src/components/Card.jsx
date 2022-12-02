import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgCard from '../assets/card.jpeg'

export default function Card(){
	return (
		<div className="card mb-4">
			<img className="card-img-top" src={ImgCard} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<a href="#" className="btn btn-light">See More</a>
			</div>
		</div>
	)
}