import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function CommentDetail(props) {
	function getDate(){
		return new Date(props.data.createdAt).toLocaleString('id-ID',{year:'numeric',month: 'long', day: "2-digit"})
	}
  return (
    <div className="comment-detail mb-4 p-4">
      <div className="date mb-2">{getDate()}</div>
      <div style={{ fontSize: "20px" }} className="mb-2">
        {props.data.comment}
      </div>
      <div>{props.data.User.username}</div>
    </div>
  );
}
