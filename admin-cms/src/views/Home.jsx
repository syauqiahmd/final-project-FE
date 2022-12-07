import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Card";
import Tables from "../components/Table";
import { fetchProjects } from "../store/slices/project";
import { fetchTags } from "../store/slices/tag";

export default function Home() {
  const dispatch = useDispatch();
  const [tableState, setTableState] = useState("project");

  const { projects } = useSelector((state) => {
    return state.project;
  });

  const { tags } = useSelector((state) => {
    return state.tag;
  });

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchTags());
    // console.log(projects, "<<<<<<<<effect");
  }, [projects[0]?.id]);

  useEffect(() => {
    dispatch(fetchTags());
    // console.log(tags, "<<<<<<<<effect");
  }, [tags[0]?.id]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col className="md-6">
          <Cards
            title="Projects"
            total={projects.length}
            setTableState={setTableState}
          />
        </Col>
        <Col className="md-6">
          <Cards
            title="Tags"
            total={tags.length}
            setTableState={setTableState}
          />
        </Col>
      </Row>
      <Row>
      <Col className="md-12">
        <Card>
          {tableState === "project" ? (
            <Tables data={projects} title="Projects" />
          ) : (
            <Tables data={tags} title="Tags" />
          )}
        </Card>
      </Col>
      </Row>
    </>
  );
}
