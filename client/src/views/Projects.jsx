import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fetchProjects } from "../store/slices/project";
import { useEffect, useState } from "react";

import Card from "../components/Card"
import { Helmet } from "react-helmet"

export default function Project(){
	const { projects, loadingProjects } = useSelector((state) => {
		return state.project;
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
	}, [dispatch]);

	return (
		<div id="project">
			<Helmet>
				<title>Projects List</title>
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
					{
						projects.map((data, index) => {
							return (
								<div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
									<Card title={data.title} slug={data.id} imgUrl={data.imgUrl} category={data.Tag.name} username={data.User.username} />
								</div>
							)
						})
					}
				</div>
				<div className="d-flex justify-content-end mt-4">
					<Link to=''><span className="icon-round"><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></span></Link>
					<Link to=''><span className="icon-round"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span></Link>
				</div>
			</div>
		</div>
	)
}