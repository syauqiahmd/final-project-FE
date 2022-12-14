import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommentDetail from "./CommentDetail";
import { useEffect, useState } from "react";
import socket from "../bin/socketio";
import { Button } from "react-bootstrap";

export default function Comments(props) {
  const [inputComment, setInputComment] = useState("");
  const [comment, setComment] = useState({});
  const [moreComment, setMoreComment] = useState(8)
  const { user } = useSelector((state) => {
    return state.user;
  });

  const submitComment = (e) => {
    e.preventDefault();
    socket.emit("handler-comment", {
      UserId: user.id,
      ProjectId: props.projectid,
      comment: inputComment,
    });
    socket.emit("fetch-comment", props.projectid, 0);
    setInputComment("");
  };

  const handlerLoadMore = () => {
    setMoreComment(current => current + 5)
  };

  useEffect(() => {
    socket.on("connect", () => {});
    socket.emit("fetch-comment", props.projectid, moreComment);
    socket.on("fetch-comment/response", (comment) => {
		setComment({
      totalItems: comment.totalItems,
      response : comment.response,
      limit: comment.limit
    });
    });
  }, [comment.totalItems, moreComment]);

  useEffect(() => {
    setComment([])
    socket.on("handler-comment/response",()=>{
      socket.emit("fetch-comment", props.projectid, moreComment);
    })
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <div id="comments">
        <div className="mb-5">
          <form onSubmit={submitComment}>
            <div className="p-3 comment-box mb-3">
              <textarea
                name="comment"
                className="p-3"
                placeholder="Write your comment...."
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">
                Post Comment
              </button>
            </div>
          </form>
        </div>
        { comment.response !== undefined ?  comment.response.map((el, idx) => {
          return <CommentDetail data={el} key={idx} limit={moreComment}/>;
        }) : <p>Loading...</p> }
        {moreComment <  comment.totalItems ? <Button variant={"secondary"} className={"w-100"} onClick={handlerLoadMore} >Load More</Button> : <></>}
      </div>
    </div>
  );
}
