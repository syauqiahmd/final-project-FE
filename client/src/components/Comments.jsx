import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import CommentDetail from "./CommentDetail"

export default function Comments(){
	return (
		<div style={{marginTop: '100px'}}>
			<div id="comments">
				<div className="mb-5">
					<div className="p-3 comment-box mb-3">
						<textarea className="p-3" placeholder="Write your comment....">

						</textarea>
					</div>
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary">
							Post Comment
						</button>
					</div>
				</div>
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
			</div>
		</div>
	)
}