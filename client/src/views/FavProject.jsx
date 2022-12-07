import { Link } from "react-router-dom";
import { fetchProjectByFavorite } from "../store/slices/project";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const FavProject = () => {
  const { projectByFavorite, loadingProjectByFavorite } = useSelector(
    (state) => {
      return state.project;
    }
  );
  const { user } = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingProjectByFavorite) {
      dispatch(fetchProjectByFavorite(user.id, localStorage.access_token));
    }
  }, [dispatch, loadingProjectByFavorite]);
  return (
    <div className="project">
      <Helmet>
        <title>Projects List | DIT-HUB</title>
      </Helmet>
      <div className="container">
        <h2 className="text-center mt-1 mb-5">Projects</h2>
        <div className="row">
          {projectByFavorite.map((el, idx) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" key={idx}>
                <Card data={el} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end mt-4">
          <Link to="">
            <span className="icon-round">
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            </span>
          </Link>
          <Link to="">
            <span className="icon-round">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavProject;
