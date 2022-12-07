import { useLocation, useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  let location = useLocation();

  const handlerProjectId = () => {
    navigate(`/project/${props.data?.slug}`, { state: { id: props.data.id } });
  };
  
  return (
    <div
      className="card h-100"
      to="/project/1"
      style={{ border: "none", padding: 0 }}
      onClick={handlerProjectId}>
      <img
        className="card-img-top"
        src={props.data?.imgUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <div className="card-title">{props.data?.title}</div>
      </div>
      {location.pathname === "/favorite-project" ? (
        ""
      ) : (
        <div className="float-left px-3 mb-2">
          <span class="badge rounded-pill text-bg-danger">
            {props.data?.Tag.name}
          </span>
          <br />
          <span>
            <small>
              Posted By : <b>{props.data?.User.username}</b>{" "}
            </small>
          </span>
        </div>
      )}
    </div>
  );
}
