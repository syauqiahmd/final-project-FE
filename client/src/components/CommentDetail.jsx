import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { instance } from "../bin/axios";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      await instance.delete(`/comment/${props.data.id}`);
      //handle toasty success
    } catch (err) {
      console.log(err);
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
        {localStorage.access_token ? <Button variant="danger" onClick={handleDeleteComment}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </Button>: ""}
        </Col>
      </Row>
    </div>
  );
}
