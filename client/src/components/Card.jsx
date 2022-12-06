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
    <div className="card mb-4">
      <Button
        to="/project/1"
        className="btn btn-light"
        style={{ border: "none", backgroundColor: "transparent", padding: 0 }}
        onClick={handlerProjectId}>
        <img className="card-img-top" src={props.data?.imgUrl} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{props.data?.title}</h4>
          <span>{props.data?.Tag.name}</span>
          <br />
          <span>{props.data?.User.username}</span>
          <div className="text-center"></div>
        </div>
      </Button>
    </div>
  );
}
