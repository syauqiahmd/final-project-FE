import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "../components/Card";
import Tables from "../components/Table";

export default function Home() {
  const state = [tableState,setTableState];
  return (
    <>
      <Row className="mb-3 mt-3">
        <Col>
          <Cards title="Projects" total="23" />
        </Col>
        <Col>
          <Cards title="Tags" total="5" />
        </Col>
      </Row>
      <Row>
        <Tables />
      </Row>
    </>
  );
}
