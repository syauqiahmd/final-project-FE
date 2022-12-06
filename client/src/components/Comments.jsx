import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommentDetail from "./CommentDetail";
import { useEffect, useState } from "react";
import socket from "../bin/socketio";

export default function Comments(props) {
  const [inputComment, setInputComment] = useState("");
  const [comment, setComment] = useState([]);

  const submitComment = (e) => {
    e.preventDefault();
    socket.emit("handler-comment", props.projectid, inputComment);
    setInputComment("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("masuk");
    });
    socket.emit("fetch-comment", props.projectid, 0);
    socket.on("fetch-comment/response", (comment) => {
      setComment(comment.response);
      console.log(comment.response);
      // butuh useState paging
    });
  }, [comment?.totalItems]);

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
        {comment.map((el, idx) => {
          return <CommentDetail data={el} key={idx} />;
        })}
      </div>
    </div>
  );
}
