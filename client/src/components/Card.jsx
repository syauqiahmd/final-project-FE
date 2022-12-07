import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ImgCard from "../assets/card.jpeg";

export default function Card(props) {
  const navigate = useNavigate();

  const handlerProjectId = () => {
    navigate(`/project/${props.data?.slug}`, { state: { id: props.data.id } });
  };
  // set full height card to be same with other card
  return (
    <div className="card h-100"
      to="/project/1"
      style={{ border: "none", padding: 0 }}
      onClick={handlerProjectId}
    >
        <img className="card-img-top" src={props.data?.imgUrl} alt="Card image cap" />
        <div className="card-body">
          <div className="card-title">{props.data?.title}</div>
        </div>
        <div className="float-left px-3 mb-2">
        <span class="badge rounded-pill text-bg-danger">{props.data?.Tag.name}</span>
          <br />
          <span><small>Posted By : <b>{props.data?.User.username}</b> </small></span>
        </div>
    </div>
  );
}
