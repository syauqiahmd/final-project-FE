import { instance } from "../bin/axios";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socket from "../bin/socketio";
import { toast } from 'react-toastify';

export default function CommentDetail(props) {
  function getDate() {
    return new Date(props.data.createdAt).toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  }

  const handleDeleteComment = async () => {
    try {
      await instance({
        url: `/public/comment/${props.data.id}`,
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      socket.emit("fetch-comment", props.data.ProjectId, props.limit);
      //handle toasty success
      toast.success("comment deleted")
    } catch (err) {
      toast.error(err.response.data)
      //handle toasty failed
    }
  };

  return (
    <div className="comment-detail mb-4 p-4">
      <Row>
        <Col>
          <div className="date mb-2">{getDate()}</div>
          <div style={{ fontSize: "20px" }} className="mb-2">
            {props.data.comment}
          </div>
          <div>{props.data.User.username}</div>
        </Col>
        <Col>
          {localStorage.access_token ? (
            <Button variant="danger" onClick={handleDeleteComment}>
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}
