import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ImgCard from '../assets/card.jpeg'

export default function Step(){
	return (
		<div className="step">
			<h3 className="mb-4">#Step 1</h3>
			<div className="row">
				<div className="col-md-6">
					<div className="img-step">
						<img src={ImgCard} />
					</div>
				</div>
				<div className="col-md-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit semper cursus. Donec eu nisl facilisis, rutrum eros porttitor, iaculis risus.
				</div>
			</div>
		</div>
	)
}