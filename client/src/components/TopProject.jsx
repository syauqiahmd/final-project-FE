import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjects } from "../store/slices/project";

import Card from "./Card";

export default function TopProject() {
  const [newProject] = useState([]);
  const { projects, loadingProjects } = useSelector((state) => {
    return state.project;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    if (projects.length > 3 && newProject.length !== 3) {
      const temp = projects.slice(1);
      temp.forEach((el) => {
        newProject.push(el);
      });
    }
  }, [dispatch, projects.length, newProject.length]);

  return (
    <div id="topproject">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column align-items-center title col-lg-12 col-md-6 col-12">
            <h3>Top Project</h3>
            <p>
              Lorem ipsum, lorem ipsum. Kamu makan kacang, aku makan lorem
              ipsum. Lorem ipsum Lorem Ipsum
            </p>
          </div>

          <div className="container col-lg-12 col-md-6 col-12">
            <div className="row d-flex justify-content-center align-items-center">
              { !loadingProjects ? newProject.map((el) => {
                return (
                  <div className="col-lg-4 col-12" key={el.id}>
                    <Card data={el}/>
                  </div>
                );
              }): <p>Loading...</p> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
