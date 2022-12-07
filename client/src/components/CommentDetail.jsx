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
      toast.success("comment deleted")
    } catch (err) {
      toast.error(err.response.data)
    }
  };

  return (
    <div className="comment-detail mb-2 p-4">
      <Row>
        <Col>
          <div className="mb-2 d-flex justify-content-between">
            <div className="text-muted">
            <FontAwesomeIcon icon="fa-solid fa-user" /> <b>{props.data.User.username}</b>
            </div>
            <div>
            {getDate()}
            </div>
          </div>
          <div style={{ fontSize: "20px" }} className="mb-2 d-flex justify-content-between">
            <div>
            {props.data.comment}
            </div>
            <div className="ms-5">
            {localStorage.access_token ? (
              <Button variant="danger" onClick={handleDeleteComment}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </Button>
            ) : (
              ""
            )}
            </div>
          </div>
          <div></div>
        </Col>
      </Row>
    </div>
  );
}
