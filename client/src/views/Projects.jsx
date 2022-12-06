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
  }, []);

  return (
    <div className="project">
      <Helmet>
        <title>Projects List</title>
      </Helmet>
      <div className="container">
        <div className="d-flex justify-content-end mt-4">
          <Link className="btn btn-primary">Add Project</Link>
        </div>
        <h2 className="text-center mt-1 mb-5">Projects</h2>
        <div className="row">
          {projects.map((el, idx) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <Card data={el} key={idx} />
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
