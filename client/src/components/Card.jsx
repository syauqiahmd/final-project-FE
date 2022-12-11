import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../bin/axios";
import { fetchProjectByFavorite } from "../store/slices/project";

export default function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const handlerProjectId = () => {
    navigate(`/project/${props.data?.slug}`, { state: { id: props.data.id } });
  };

  const delFav = async () => {
    try {
      await instance({
        method: "delete",
        url: `/public/favorites/${props.favid}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      toast.success("Item Has been success deleted");
      dispatch(
        fetchProjectByFavorite({
          userid: props.userid,
          access_token: localStorage.access_token,
        })
      );
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
    }
  };

  return (
    <div className="card h-100" style={{ border: "none", padding: 0 }}>
      <img
        onClick={handlerProjectId}
        className="card-img-top"
        src={props.data?.imgUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <div className="card-title">{props.data?.title}</div>
      </div>
      {location.pathname === "/favorite-project" ? (
        <div
          className="card-body"
          style={{ display: "flex", alignItems: "end" }}>
          <button className="btn btn-outline-danger w-100" onClick={delFav}>
            Delete
          </button>
        </div>
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
