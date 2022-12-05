import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Card";
import Tables from "../components/Table";
import { fetchProjects } from "../store/slices/project";
import { fetchTags } from "../store/slices/tag";

export default function Home() {
  const dispatch = useDispatch();
  const [tableState, setTableState] = useState("project");

  const { projects } = useSelector((state) => {
    return state.project.projects;
  });

  const { tags } = useSelector((state) => {
    return state.tag.tags;
  });

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchTags());
    console.log(projects, tags);
  }, []);

  return (
    <>
      <Row className="mb-3 mt-3">
        <Col>
          <Cards title="Projects" total="23" setTableState={setTableState} />
        </Col>
        <Col>
          <Cards title="Tags" total="5" setTableState={setTableState} />
        </Col>
      </Row>
      <Row>
        <p>{tableState}</p> 
        {/* ^^^^test, don't forget to remove^^^^ */}
        {tableState === "project" ? <Tables data={projects}/> : <Tables data={tags}/>  }
      </Row>
    </>
  );
}
