import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export default function CommentDetail(){
	return (
		<div className="comment-detail mb-4 p-4">
			<div className="date mb-2">
				09/12/2022
			</div>
			<div style={{fontSize: '20px'}} className="mb-2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
			<div>
				Username
			</div>
		</div>
	)
}