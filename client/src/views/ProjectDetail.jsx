import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Step from "../components/Step"
import Introduction from '../components/Introduction'
import Comments from "../components/Comments"
import { Helmet } from "react-helmet"
import { fetchProjectById } from "../store/slices/project";
import { fetchSteps } from "../store/slices/step";
import { useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function ProjectDetail(){
	const {state} = useLocation()
	const {id} = useParams()
	const dispatch = useDispatch();

	const { projectById, loadingProject } = useSelector((state) => {
		return state.project;
	})

	useEffect(() => {
    if (loadingProject) {
      dispatch(fetchProjectById(state.id));
    }
  }, []);

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
        <Comments projectid={state.id} />
      </div>
    </div>
  );
}
