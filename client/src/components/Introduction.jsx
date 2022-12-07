import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instance } from "../bin/axios";
import { toast } from "react-toastify";

export default function Introduction(props) {
  const handlerFav = async () => {
    try {
      const { data } = await instance({
        url: `/public/favorites/${props.data.id}`,
        method: "post",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      //   console.log(data);
      // handler toastfy success
      toast.success("success add to favorite")
    } catch (err) {
      console.log(err);
      // handler toastfy
      toast.error(err.response.data)
    }
  };

  const handlerReport = async () => {
    try {
      const { data } = await instance({
        url: `/public/reports/${props.data.id}`,
        method: "post",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      // console.log(data);
      // handler toastfy success
      toast.success("report successful")
    } catch (err) {
      console.log(err);
      // handler toastfy
      toast.error(err.response.data)
    }
  };

  return (
    <div id="introduction" className="mb-5">
      <div className="row mb-5">
        <div className="col-lg-8 col-sm-6 col-12 mb-4">
          <img src={props.data.imgUrl} alt="project" />
        </div>
        <div className="col-lg-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between infobox mb-3">
            <span>Difficult</span>
            <span>{props.data?.difficulty}</span>
          </div>
          <div className="d-flex justify-content-between infobox mb-3">
            <span>Total Step</span>
            <span>{props.data.Steps?.length}</span>
          </div>
          <div className="d-flex justify-content-between infobox mb-3">
            <span>Comment</span>
            <span>20</span>
          </div>
          <div className="mb-3 container">
            <div className="row d-flex justify-content-around">
              <button className="btn btn-primary col-5" onClick={handlerFav}>
                <FontAwesomeIcon icon="fa-solid fa-star" /> Favorites
              </button>
              <button className="btn btn-primary col-5" onClick={handlerReport}>
                <FontAwesomeIcon icon="fa-solid fa-exclamation" /> Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Introduction</h3>
        <p>{props.data?.introduction}</p>
      </div>
    </div>
  );
}
