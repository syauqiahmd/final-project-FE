import { Col, Row } from "react-bootstrap";

export default function Step(props) {

  return (
    <div className="step">
      <Row className="justify-content-start">
        <Col>
          <h3 className="mb-4">#Step {props.idx + 1}</h3>
        </Col>
        <Col>
          <h2>{props.data?.name}</h2>
        </Col>
      </Row>
      <div className="row">
        <div className="col-md-6">
          <div className="img-step">
            <img src={props.data?.imgUrl} alt="Image Step"/>
          </div>
        </div>
        <div className="col-md-6">
          {props.data.description.map((el, idx) => {
            return (
              <ul key={idx}>
                <li>{el}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
