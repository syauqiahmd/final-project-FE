import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgCard from '../assets/card.jpeg'

export default function Card({title, slug, imgUrl, category, username}){
	return (
		<div className="card mb-4">
			<Link to={"/project/" + slug}><img className="card-img-top" src={imgUrl} alt="Card image cap" /></Link>
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
				<span>{category}</span><br />
				<span>{username}</span>
				<div className="text-center">
					<Link to={"/project/" + slug} className="btn btn-light">See More</Link>
				</div>
			</div>
		</div>
	)
}