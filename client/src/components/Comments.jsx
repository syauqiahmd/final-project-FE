import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import CommentDetail from "./CommentDetail"
import { fetchComments } from "../store/slices/comment";
import { useEffect } from 'react'

export default function Comments({id}){
	const { comments, loadingComment } = useSelector((state) => {
		return state.comment;
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComments({ projectid: id }));
	}, []);

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
				{comments.map((data, index) => {
					return (
						<CommentDetail key={index} comment={data.comment} />
					)
				})}
				{/* <CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail />
				<CommentDetail /> */}
			</div>
		</div>
	)
}