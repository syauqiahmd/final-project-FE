import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Step from "../components/Step";
import Introduction from "../components/Introduction";
import Comments from "../components/Comments";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { fetchProjectById } from "../store/slices/project";

export default function ProjectDetail(){
	const {state} = useLocation()
	const dispatch = useDispatch();

	const { projectById, loadingProject } = useSelector((state) => {
		return state.project;
	})

	useEffect(() => {
    if (loadingProject) {
      dispatch(fetchProjectById(state?.id));
    }
  }, [dispatch, loadingProject]);

	return (
    <div id="project-detail">
      <Helmet>
        <title>{projectById?.title}</title>
      </Helmet>
      <div className="container">
        <div id="title">
          <h1>{projectById?.title}</h1>
          <h5>Written By: {projectById.User?.username}</h5>
        </div>
        <Introduction data={projectById}/>
        { !loadingProject ? projectById?.Steps.map((el, idx) => {
          return <Step key={el.id} data={el} idx={idx} />;
        }): <p>Loading...</p> }
        <Comments projectid={state?.id} />
      </div>
    </div>
  );
}
