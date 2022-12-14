import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import { fetchProjects, resetingProjectById } from "../store/slices/project";
import { useEffect } from "react";

export default function Project() {
  const { projects, loadingProjects } = useSelector((state) => {
    return state.project;
  });
  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(resetingProjectById())
		if(loadingProjects){
		dispatch(fetchProjects());
	}
  }, [dispatch, loadingProjects]);

  return (
    <div className="project">
      <Helmet>
        <title>Projects List | DIT-HUB</title>
      </Helmet>
      <div className="container">
        {
          localStorage.getItem('access_token') !== null
            ? <div className="d-flex justify-content-end mt-4">
              <Link to="/new-project" className="btn btn-primary">
                Add Project
              </Link>
            </div>
            : null
        }
        <h2 className="text-center mt-1 mb-5">Projects</h2>
        <div className="row">
          {projects.map((el, idx) => {
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
}
