import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgCard from '../assets/card.jpeg'

export default function Step({index, name, imgUrl, description}){
	return (
		<div className="step">
			<h3 className="mb-4">#{index} {name}</h3>
			<div className="row">
				<div className="col-md-6 mb-4">
					<div className="img-step">
						<img src={imgUrl} />
					</div>
				</div>
				<div className="col-md-6 d-flex flex-column justify-content-center">
					<ul>
						{description.map(data => {
							return (
								<li style={{fontSize: '20px'}}>
									{data}
								</li>
							)
						})}
					</ul>
					
				</div>
			</div>
		</div>
	)
}